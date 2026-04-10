import os
import json
import hmac
import hashlib
import datetime
import urllib.request
import xml.etree.ElementTree as ET


def sign(key, msg):
    return hmac.new(key, msg.encode('utf-8'), hashlib.sha256).digest()


def get_signature_key(key, date_stamp, region, service):
    k_date = sign(('AWS4' + key).encode('utf-8'), date_stamp)
    k_region = sign(k_date, region)
    k_service = sign(k_region, service)
    return sign(k_service, 'aws4_request')


def handler(event: dict, context) -> dict:
    """Список файлов в S3 хранилище"""
    if event.get('httpMethod') == 'OPTIONS':
        return {'statusCode': 200, 'headers': {'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type'}, 'body': ''}

    access_key = os.environ['AWS_ACCESS_KEY_ID']
    secret_key = os.environ['AWS_SECRET_ACCESS_KEY']
    endpoint = 'bucket.poehali.dev'
    bucket = 'files'
    region = 'us-east-1'
    service = 's3'

    t = datetime.datetime.utcnow()
    amzdate = t.strftime('%Y%m%dT%H%M%SZ')
    datestamp = t.strftime('%Y%m%d')

    host = endpoint
    canonical_uri = f'/{bucket}'
    canonical_querystring = 'list-type=2&max-keys=500'
    canonical_headers = f'host:{host}\nx-amz-date:{amzdate}\n'
    signed_headers = 'host;x-amz-date'
    payload_hash = hashlib.sha256(b'').hexdigest()
    canonical_request = f'GET\n{canonical_uri}\n{canonical_querystring}\n{canonical_headers}\n{signed_headers}\n{payload_hash}'

    credential_scope = f'{datestamp}/{region}/{service}/aws4_request'
    string_to_sign = f'AWS4-HMAC-SHA256\n{amzdate}\n{credential_scope}\n{hashlib.sha256(canonical_request.encode()).hexdigest()}'
    signing_key = get_signature_key(secret_key, datestamp, region, service)
    signature = hmac.new(signing_key, string_to_sign.encode('utf-8'), hashlib.sha256).hexdigest()
    authorization = f'AWS4-HMAC-SHA256 Credential={access_key}/{credential_scope}, SignedHeaders={signed_headers}, Signature={signature}'

    url = f'https://{endpoint}/{bucket}?{canonical_querystring}'
    req = urllib.request.Request(url, headers={'x-amz-date': amzdate, 'Authorization': authorization})
    with urllib.request.urlopen(req) as resp:
        body = resp.read().decode()

    root = ET.fromstring(body)
    ns = {'s3': 'http://s3.amazonaws.com/doc/2006-03-01/'}
    files = [c.find('s3:Key', ns).text for c in root.findall('s3:Contents', ns)]

    return {
        'statusCode': 200,
        'headers': {'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'files': files, 'count': len(files)})
    }

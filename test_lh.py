from lambda_function import lambda_handler

event_get = {
    "httpMethod": "GET",
    "queryStringParameters": {"hero_id": "123"}
}

event_post = {
    "httpMethod": "POST",
    "body": '{"hero": {"id": "123"}, "nome": "Samuel"}'
}

print(lambda_handler(event_get, None))
print(lambda_handler(event_post, None))
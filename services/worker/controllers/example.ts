// eslint-disable-next-line
import { APIGatewayEvent, APIGatewayProxyResult } from 'aws-lambda';

// eslint-disable-next-line import/prefer-default-export
export function handler(event: APIGatewayEvent): APIGatewayProxyResult {
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify(event),
  };
}

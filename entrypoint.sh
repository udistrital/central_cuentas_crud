#!/usr/bin/env bash

set -e
set -u
set -o pipefail

export CENTRAL_CUENTAS_MONGO_USER="$(aws ssm get-parameter --name /${PARAMETER_STORE}/central_cuentas_crud/db/username --output text --query Parameter.Value)"
export CENTRAL_CUENTAS_MONGO_PASS="$(aws ssm get-parameter --with-decryption --name /${PARAMETER_STORE}/central_cuentas_crud/db/password --output text --query Parameter.Value)"

exec node dist/main

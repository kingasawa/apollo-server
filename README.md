docker run --restart=always -d \
  -p 5435:5432 \
  --name vcoin \
  -e POSTGRES_PASSWORD="" \
  -e POSTGRES_DB=vcoin \
  postgres



-v /app/service/app-dbm:/var/lib/postgresql/data \
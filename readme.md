

./docker
docker-compose up -d

docker exec -it mongodb bash

mongosh -u admin_user -p admin_pass

mongosh -u test_user -p test_pass --authenticationDatabase test-database
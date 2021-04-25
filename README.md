# pfa-docker-desafio1
Desafio 1 - PFA Docker FullCycle

Comandos para executar:

docker network create pfa

docker run -d --network=pfa --name db hssantos/pfa-docker-desafio1-mysql
docker exec -it db bash
mysql -uroot -proot < create-schema.sql
exit

docker run -d --network=pfa --name=nodecontainer -v $(pwd)/node:/usr/src/app hssantos/pfa-docker-desafio1-node

docker run -d --network=pfa --name=nginxcontainer -p 8080:80 hssantos/pfa-docker-desafio1-nginx
# Spheria
Web app that helps parents teaching the value of money to kids, exchange toys, have a "toy balance", etc..


FAQ
How can I connect to running database from terminal?
Sometimes you might want to inspect the tables, run raw queries, seed the database, check that a certain backend action has been performed correctly. To do that you can simply run the following command
docker run -it --network host postgres:11-alpine psql -h localhost -U skeleton_user -p 5433 -W skeleton
Use the password specified in docker-compose.yaml.

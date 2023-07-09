# CryptoFriend


### docker cmd
- To create the db:
> docker run --name cryptofriend-db -e POSTGRES_PASSWORD=cryptovault -e POSTGRES_DB=cryptofriend-db -v "D:\React Native\CryptoFriend\db" -p 5432:5432 -d postgres
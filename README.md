# Node
Node.Js, Redis, MariaDB, NGINX Skeleton (Ubuntu 16.04)


>Git

        create a new repository on the command line

        git init

        git add README.md

        git commit -m "first commit"

        git remote add origin [https://github.com/USERID/REPOSITORY-NAME.git]
        git push -u origin master


        …or push an existing repository from the command line

        git remote add origin [https://github.com/USERID/REPOSITORY-NAME.git]

        git push -u origin master


>Setting

    If you do not have the docker and docker-compose and node installed yet, 

    cd automation 
    run ./Setting.sh

    cd ..

    sudo docker compose up or sudo docker compose up &



>Port

    You should check inbound rules and open port 80, 8080, 443, 6379, 3306.

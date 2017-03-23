# Node
Node.Js, Redis, MariaDB, NGINX Skeleton (Ubuntu 16.04)


<h3>Git

        remove .git 
       
        create a new repository on the command line

        git init

        git add README.md

        git commit -m "first commit"

        git remote add origin [https://github.com/USERID/REPOSITORY-NAME.git]
        git push -u origin master


        …or push an existing repository from the command line

        git remote add origin [https://github.com/USERID/REPOSITORY-NAME.git]

        git push -u origin master


<h3>Setting

    If you do not have the docker and docker-compose and node installed yet, 

    cd automation 
    run ./Setting.sh

    cd ..

    sudo docker compose up or sudo docker compose up &



<h3>Port

    You should check inbound rules and open port 80, 8080, 443, 6379, 3306.

docker ps -a | grep "webhook"
if [ $? = 0 ]; then
  echo "docker container webhook is running. restart ..."
  docker restart webhook 
else
  docker build -t webhook:1.0 . 
  if [ $? = 0 ]; then
    echo "docker container webhook is starting..."
    docker run --name webhook --rm -d -p 5000:5000 -v $(pwd):/app webhook:1.0  
  fi
fi 

# CMD npm start  
docker ps -a 
 # sh -c "npm install -g nodemon && npm install && nodemon index.js"
 # docker run --name webhook -it -p 5000:5000 -v $(pwd):/app webhook:1.0  /bin/sh 
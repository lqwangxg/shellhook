docker ps -a | grep "webhook"
if [ $? = 0 ]; then
  echo "docker container webhook is running. restart ..."
  docker restart webhook 
else
  echo "docker container webhook is starting..."
  docker run --name webhook --rm -d -p 5000:5000 -v $(pwd):/app shook  
fi 

# CMD npm start  
docker ps -a 
 # sh -c "npm install -g nodemon && npm install && nodemon index.js"
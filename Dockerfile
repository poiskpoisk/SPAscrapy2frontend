FROM ubuntu:latest
RUN apt-get update && apt-get install --yes \
     nodejs-legacy \
     npm \
     git

RUN git clone https://github.com/poiskpoisk/testjob2frontend
RUN chmod -R 777 testjob2frontend
WORKDIR testjob2frontend
RUN npm install
EXPOSE 3000
EXPOSE 8000
EXPOSE 443
EXPOSE 80
CMD npm start


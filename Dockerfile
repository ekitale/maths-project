FROM quay.io/ekitale/maths-project:latest
RUN git clone https://github.com/ekitale/maths-project /root/ibrahim
WORKDIR /root/ibrahim/
RUN npm install
CMD ["npm", "start"]

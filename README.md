# Simple Whatsapp Api

## Allows integration of WhatsApp with any application through POST requests:

This Api follows the same terms of service as WhatsApp. It is important that you read these terms carefully. You are responsible for the use of the tool and the consequences of misuse. We reinforce that the API is not intended for SPAM practice and that sending unwanted messages violates WhatsApp's terms of service. Violation of these terms may result in your WhatsApp account being blocked and permanently banned.


The api is 100% free and opensource, if you are interested in hiring paid support, installation or implementation, [Felipe D. Teodoro](https://api.whatsapp.com/send?phone=5521972745771&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20suporte%20da%20Simple%20Whatsapp%2Api) 


This project is based on the [Venom-bot](https://github.com/orkestral/venom) a virtual browser without a graphical interface that opens whatsapp web and executes all commands via code, thus enabling the automation of all functions.

### Install on UBUNTU/DEBIAN:

```bash
sudo apt install -y curl nano git gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 \
libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 \
libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 \
libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget \
build-essential apt-transport-https libgbm-dev
```

### Install the ChomeDrive

```bash
wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install ./google-chrome-stable_current_amd64.deb
```

### Install of nodejs 16

```bash
cd ~
curl -sL https://deb.nodesource.com/setup_16.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt -y install nodejs
node -v
```

### Clone git

```bash
git clone https://github.com/felipedamacenoteodoro/simple-whatsapp-api
cd simple-whatsapp-api
npm install --allow-root --unsafe-perm=true
```

### Install on Server

```bash
npm start
```

### Keep processes alive with every server restart

```bash
npm install -y pm2 -g
pm2 start index.js
pm2 startup
```
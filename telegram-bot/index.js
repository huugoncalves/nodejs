require('dotenv').config();
const { Telegraf } = require('telegraf')

let MSG_GESTAO_BANCA = "*COMECE POR AQUI:* \n\n"
+ "➡️ É NECESSÁRIO TER UMA CONTA NA *BET365*, POIS O FUTEBOL VIRTUAL ESTÁ LÁ! \n\n"
+ "📒 ANTES DE COMEÇAR VEJA O *MATERIAL ENSINANDO A OPERAR*! \n\n"
+ "🛎 DEIXE AS *NOTIFICAÇÕES* DO GRUPO ATIVAS! \n\n"
+ "📊 TENHA *GESTÃO DE BANCA*! \n\n"
+ "🚦 TENHA *STOP WIN*, *STOP LOS*S E DEFINA UMA *META DIÁRIA*! \n\n"
+ "🥺 CASO SEJA INICIANTE: OPERE COM POUCO INVESTIMENTO ATÉ TER CONFIANÇA NO QUE APRENDEU!";

const bot = new Telegraf(process.env.BOT_TOKEN);
const CATIMBA_CHAT_ID_AMBOS = process.env.CHAT_ID;
const CATIMBA_MSG_GESTAOBANCA_AMBOS = process.env.TIME_MSG_GESTAO_BANCA_MINUTOS * 60000;

setInterval(() => {
    let now = new Date();
    let a = `${now}`;
    let result = a.split(" ");
    if (result[4] > '08:00:00' && result[4] < '23:00:00'){
        bot.telegram.sendMessage(CATIMBA_CHAT_ID_AMBOS, MSG_GESTAO_BANCA, { parse_mode: 'markdown' });
    }
}, CATIMBA_MSG_GESTAOBANCA_AMBOS);

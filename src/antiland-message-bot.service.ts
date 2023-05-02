import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { MENSAGEM } from './const/mensagens';
const chalk = require('chalk');
const moment = require('moment-timezone');

@Injectable()
export class AntilandMessageBotService {
  users = [];
  constructor(
    private readonly httpService: HttpService,
    private configService: ConfigService,
  ) {}

  async logMensagem(params: {
    url?: string;
    time?: any;
    grupo?: any;
    color?: 'red' | 'blue' | 'green' | 'yellow';
  }) {
    const { url, time, grupo, color } = params;

    const URL =
      url ||
      `https://ps.pndsn.com/v2/subscribe/sub-c-24884386-3cf2-11e5-8d55-0619f8945a4f/${
        grupo?.dialogue || 'vwQyfZ3r8g'
      }/0?heartbeat=300&tt=${
        time ?? new Date().getTime()
      }&tr=24&uuid=cUAmxdrlJJ&pnsdk=PubNub-JS-Web%2F4.37.0&l_pres=600`;
    const headers = {
      'Content-Type': 'application/json',
    };
    // console.log(URL);
    await this.httpService
      .get(URL, {
        headers,
      })
      .subscribe({
        next: (response) => {
          const user = {
            name: response.data.m[0]?.d?.sendersName,
            message: response.data.m[0]?.d?.message,
            id: response.data.m[0]?.d?.senderId,
            grupo: grupo?.dialogue,
          };
          // const users = [];
          this.users.push(user);

          const colorConsole = (
            text: string,
            cor: 'red' | 'blue' | 'green' | 'yellow',
          ) => {
            return {
              ['red']: chalk.red(text),
              ['blue']: chalk.blue(text),
              ['green']: chalk.green(text),
              ['yellow']: chalk.yellow(text),
            }[cor];
          };
          if (eval(this.configService.get<any>('LOGS'))) {
            console.log(`${colorConsole(user.name, color)} : ${user.message} `);
            //'cUAmxdrlJJ'De6FYcU7vu
            // if (['cUAmxdrlJJ'].includes(response.data.m[0]?.d?.senderId)) {
            //   console.log(colorConsole('ADM', 'red'));
            //   const comands = {
            //     ['/opinin']: this.antilandBotMessage({
            //       grupo,
            //       mensagens: MENSAGEM.genericas,
            //     }),
            //   };
            //   comands[user.message];
            // }

            const brasiliaTime = moment()
              .tz('America/Sao_Paulo')
              .format('HH:mm:ss');
            const comandsValids = ['/horas', '/time', '/dono', '/motivacional'];

            // if (comandsValids.includes(user.message)) {
            switch (user.message) {
              case '/horas':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu a hora e aí está:
                ${brasiliaTime}`,
                });
                break;
              case '/hora':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu a hora e aí está:
                ${brasiliaTime}`,
                });
                break;
              case '/time':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu a hora e aí está:
                ${brasiliaTime}`,
                });
                break;
              case '/reflexao':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu um espelho🪞.`,
                });

                break;
              case '/gay':
                let usersGroup = this.users.filter(
                  (user) => user.grupo === grupo.dialogue,
                );
                let gay = this.escolherElementoAleatorio(usersGroup).name;
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} perguntou quem é o(a) mais gay.
                  
${gay} é o(a) mais gay do grupo!🤣`,
                });

                break;
              case '/mamar':
                let usersGroup1 = this.users.filter(
                  (user) => user.grupo === grupo.dialogue,
                );
                let gay1 = this.escolherElementoAleatorio(usersGroup1).name;
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} mamou ${gay1}.

Glub glub glub glub glub glub glub glub glub glub glub glub glub!`,
                });

                break;
              case '/mama':
                let usersGroup2 = this.users.filter(
                  (user) => user.grupo === grupo.dialogue,
                );
                let gay2 = this.escolherElementoAleatorio(usersGroup2).name;
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} mamou ${gay2}. 

Glub glub glub glub glub glub glub glub glub glub glub glub glub!`,
                });

                break;
              case '/reflexão':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu um espelho🪞.`,
                });

                break;
              // case '/chata':
              //   this.antilandBotMessage({
              //     grupo,
              //     randMessage: `Louise é a mais chata`,
              //   });

              //   break;
              case '/espelho':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} pediu um espelho🪞.`,
                });

                break;
              case '/gostoso':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} perguntou quem é o mais gostoso.
                    
Nehuma novidade que é o Zuck256.`,
                });

                break;
              case '/dono':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name} perguntou quem é meu dono.

Pertenço a Zuck256.👌`,
                });
                break;
              case '/motivacional':
                this.antilandBotMessage({
                  grupo,
                  mensagens: MENSAGEM.motivacionais,
                  user: user.name,
                });
                break;
              case '/opinion':
                this.antilandBotMessage({
                  grupo,
                  mensagens: MENSAGEM.genericas,
                  // user: user.name,
                });
                break;
              case '/conselho':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `Conselho para: ${user.name}.
                  
${this.escolherElementoAleatorio(MENSAGEM.desconselhos)}`,
                  // user: user.name,
                });
                break;

              case '/frase':
                this.antilandBotMessage({
                  grupo,
                  mensagens: MENSAGEM.motivacionais,
                  user: user.name,
                });
                break;

              case '/mamada':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `${user.name}, Glub glub?`,
                  // user: user.name,
                });
                break;
              case '/frases':
                this.antilandBotMessage({
                  grupo,
                  mensagens: MENSAGEM.motivacionais,
                  user: user.name,
                });
                break;
              case '/comandos':
                this.antilandBotMessage({
                  grupo,
                  randMessage: `
Comandos:

/horas
/time
/hora
/reflexao
/reflexão
/gay
/mamar
/mama
/mamada
/espelho
/gostoso
/dono
/motivacional
/frase
/opinion
/conselho
                    `,
                  // user: user.name,:
                });
                break;
              default:
            }
            // }
            this.logMensagem({ time: response.data.t.t, grupo, color });
          }
        },
        error: (err) => {
          console.log(err);
        },
      });
  }

  escolherElementoAleatorio(array) {
    const indiceAleatorio = Math.floor(Math.random() * array.length);
    return array[indiceAleatorio];
  }

  async antilandBotMessage(botConfig: {
    randMessage?: string;
    grupo: any;
    grupoName?: string;
    mensagens?: ReadonlyArray<string>;
    order?: 'ASC' | 'DESC' | 'RAND';
    user?: string;
  }) {
    const {
      randMessage,
      grupo,
      grupoName,
      mensagens,
      order = botConfig.order ?? 'RAND',
      user,
    } = botConfig;
    const mensagem = this.getMensagemGrupoPayload({
      randMessage,
      grupo,
      mensagens,
      order,
      user,
    });

    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      await this.httpService
        .post(this.configService.get<string>('URL'), mensagem, {
          headers,
        })
        .subscribe({
          next: (response) => {
            if (eval(this.configService.get<any>('LOGS'))) {
              console.log({
                date: new Date(Date.now()),
                mensagem: mensagem.message,
                grupo: grupoName ?? grupo,
                data: response.data,
              });
            }
          },
          error: (err) => {
            console.log({
              date: new Date(Date.now()),
              mensagem: mensagem,
              grupo: grupoName,
              err,
            });
          },
        });
    } catch (error) {
      console.error(error);
    }
  }

  getMensagemGrupoPayload(params: {
    randMessage?: string;
    grupo: any;
    mensagens: ReadonlyArray<string>;
    order: 'ASC' | 'DESC' | 'RAND';
    user?: string;
  }) {
    const {
      randMessage,
      grupo,
      mensagens,
      order = params.order ?? 'RAND',
      user,
    } = params;
    return {
      ...grupo,
      message: user
        ? `Mensagem motivacional para: ${user}.

${this.pegarMensagemAleatoria(mensagens, order)}`
        : randMessage ?? this.pegarMensagemAleatoria(mensagens, order),
      _SessionToken: this.configService.get<string>('SESSION_TOKEN'),
    };
  }

  pegarMensagemAleatoria(
    mensagens: ReadonlyArray<string>,
    order: 'ASC' | 'DESC' | 'RAND' = 'RAND',
    index: number = 0,
  ) {
    const msgByOrders = {
      ['RAND']: mensagens[Math.floor(Math.random() * mensagens.length)],
    };
    return msgByOrders[order];
  }
}

import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { AntilandMessageBotService } from './antiland-message-bot.service';
import { GRUPO } from './const/grupos';
import { MENSAGEM } from './const/mensagens';

@Injectable()
export class MainService implements OnApplicationBootstrap {
  constructor(private botService: AntilandMessageBotService) {}
  async onApplicationBootstrap() {
    await Promise.all([
      // this.botService.logMensagem({
      //   time: new Date().getTime(),
      //   grupo: GRUPO.zuckBot,
      //   color: 'blue',
      // }),
      // this.botService.logMensagem({
      //   time: new Date().getTime(),
      //   grupo: GRUPO.zuckBot,
      //   color: 'blue',
      // }),
      // this.botService.logMensagem({
      //   time: new Date().getTime(),
      //   grupo: GRUPO.saoPaulo,
      //   color: 'green',
      // }),
      // this.botService.logMensagem({
      //   time: new Date().getTime(),
      //   grupo: GRUPO.novatos,
      //   color: 'blue',
      // }),
      // this.botService.logMensagem({
      //   time: new Date().getTime(),
      //   grupo: GRUPO.rioDeJaneiro,
      //   color: 'red',
      // }),
    ]);
    // // this.prisao();
    // this.grupoNovatos();
    // this.grupoNovatossla();
    // this.grupoSãoPauloSla();
  }
  // @Cron('0 */10 * * * *', { name: 'grupoNovatos' })
  async grupoNovatos() {
    const grupoName: string = 'novatos';
    const grupo: any = GRUPO.novatos;
    const mensagens: ReadonlyArray<string> = MENSAGEM.genericas;
    this.botService.antilandBotMessage({ grupoName, grupo, mensagens });
  }

  // @Cron('0 */15 * * * *', { name: 'grupoNovatos' })
  async grupoNovatossla() {
    const grupoName: string = 'novatos';
    const grupo: any = GRUPO.novatos;
    // const mensagens: ReadonlyArray<string> = MENSAGEM.genericas;
    this.botService.antilandBotMessage({
      grupoName,
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
  }
  // @Cron('0 */10 * * * *', { name: 'rj' })
  async grj() {
    const grupoName: string = 'rj';
    const grupo: any = GRUPO.rioDeJaneiro;
    const mensagens: ReadonlyArray<string> = MENSAGEM.genericas;
    this.botService.antilandBotMessage({ grupoName, grupo, mensagens });
  }

  // @Cron('0 */15 * * * *', { name: 'rj' })
  async grjbot() {
    const grupoName: string = 'rj';
    const grupo: any = GRUPO.rioDeJaneiro;
    // const mensagens: ReadonlyArray<string> = MENSAGEM.genericas;
    this.botService.antilandBotMessage({
      grupoName,
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
  }

  // @Cron('0 */10 * * * *', { name: 'sp' })
  async grupoSãoPauloSla() {
    const grupoName: string = 'novatos';
    const grupo: any = GRUPO.saoPaulo;
    // const mensagens: ReadonlyArray<string> = MENSAGEM.genericas;
    this.botService.antilandBotMessage({
      grupoName,
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
  }

  // @Cron('0 */3 * * * *', { name: 'grupoSaoPaulo' })
  async grupoSaoPaulo() {
    const grupoName: string = 'São Paulo';
    const grupo: any = GRUPO.saoPaulo;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    this.botService.antilandBotMessage({ grupoName, grupo, mensagens });
  }

  // @Cron('0 */10 * * * *', { name: 'grupoSaoPaulo' })
  async grupoLivro() {
    const grupoName: string = 'São Paulo';
    const grupo: any = GRUPO.saoPaulo;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    this.botService.antilandBotMessage({ grupoName, grupo, mensagens });
  }
  // @Cron('0 */2 * * * *', { name: 'prisao' })
  async zuckbot() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    this.botService.antilandBotMessage({ grupoName, grupo, mensagens });
    // this.botService.antilandBotMessage({
    //   grupo,
    //   randMessage: `/ban`,
    // });
  }
  // @Cron('0 */2 * * * *', { name: 'zuckbot' })
  async zuckbotComands() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    this.botService.antilandBotMessage({
      grupoName,
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
  }
  @Cron('*/5 * * * * *', { name: 'zuckbot' })
  async zuckbotComandschat() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    const arr = [
      '/horas',
      '/time',
      '/hora',
      '/reflexao',
      '/reflexão',
      '/gay',
      '/mamar',
      '/mama',
      '/mamada',
      '/espelho',
      '/gostoso',
      '/dono',
      '/motivacional',
      '/frase',
      '/opinion',
      '/conselho',
    ];
    this.botService.antilandBotMessage({
      grupoName,
      grupo,
      mensagens: arr,
      // user: user.name,:
    });
  }
  @Cron('*/5 * * * * *', { name: 'zuckbot' })
  async zuckbotComandschat3() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    const arr = [
      '/horas',
      '/time',
      '/hora',
      '/reflexao',
      '/reflexão',
      '/gay',
      '/mamar',
      '/mama',
      '/mamada',
      '/espelho',
      '/gostoso',
      '/dono',
      '/motivacional',
      '/frase',
      '/opinion',
      '/conselho',
    ];
    this.botService.antilandBotMessage({
      grupoName,
      grupo,
      mensagens: arr,
      // user: user.name,:
    });
  }
  @Cron('*/5 * * * * *', { name: 'zuckbot' })
  async zuckbotComandschat2() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    const arr = [
      '/horas',
      '/time',
      '/hora',
      '/reflexao',
      '/reflexão',
      '/gay',
      '/mamar',
      '/mama',
      '/mamada',
      '/espelho',
      '/gostoso',
      '/dono',
      '/motivacional',
      '/frase',
      '/opinion',
      '/conselho',
    ];
    this.botService.antilandBotMessage({
      grupoName,
      grupo,
      mensagens: arr,
      // user: user.name,:
    });
  }
  @Cron('*/5 * * * * *', { name: 'zuckbot' })
  async zuckbotComandschat4() {
    const grupoName: string = 'zuck_bot';
    const grupo: any = GRUPO.zuckBot;
    const mensagens: ReadonlyArray<string> = MENSAGEM.resenhaDeLivros;
    const arr = [
      '/horas',
      '/time',
      '/hora',
      '/reflexao',
      '/reflexão',
      '/gay',
      '/mamar',
      '/mama',
      '/mamada',
      '/espelho',
      '/gostoso',
      '/dono',
      '/motivacional',
      '/frase',
      '/opinion',
      '/conselho',
    ];
    this.botService.antilandBotMessage({
      grupoName,
      grupo,
      mensagens: arr,
      // user: user.name,:
    });
  }
}

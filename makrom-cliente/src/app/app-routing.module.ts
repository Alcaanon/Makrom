import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
/*   {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }, */
  {
    path: 'info',
    loadChildren: () => import('./pages/info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'termos',
    loadChildren: () => import('./pages/termos/termos.module').then( m => m.TermosPageModule)
  },
  {
    path: 'politica',
    loadChildren: () => import('./pages/politica/politica.module').then( m => m.PoliticaPageModule)
  },
  {
    path: 'alterarsenha',
    loadChildren: () => import('./pages/alterarsenha/alterarsenha.module').then( m => m.AlterarsenhaPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'onboarding',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/onboarding/onboarding.module').then( m => m.OnboardingPageModule)
  },
  {
    path: 'quemsomos',
    loadChildren: () => import('./pages/quemsomos/quemsomos.module').then( m => m.QuemsomosPageModule)
  },
  {
    path: 'objetivos',
    loadChildren: () => import('./pages/objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
  },
  {
    path: 'equipe',
    loadChildren: () => import('./pages/equipe/equipe.module').then( m => m.EquipePageModule)
  },

  {
    path: 'estatuto', //
    loadChildren: () => import('./pages/estatuto/estatuto.module').then( m => m.EstatutoPageModule)
  },
  {
    path: 'vantagens',
    loadChildren: () => import('./pages/vantagens/vantagens.module').then( m => m.VantagensPageModule)
  },
  {
    path: 'parceiros',
    loadChildren: () => import('./pages/parceiros/parceiros.module').then( m => m.ParceirosPageModule)
  },
  {
    path: 'faleconosco',
    loadChildren: () => import('./pages/faleconosco/faleconosco.module').then( m => m.FaleconoscoPageModule)
  },
  {
    path: 'eventos',
    loadChildren: () => import('./pages/eventos/eventos.module').then( m => m.EventosPageModule)
  },
  {
    path: 'agenda',
    loadChildren: () => import('./pages/agenda/agenda.module').then( m => m.AgendaPageModule)
  },
  {
    path: 'galeria',
    loadChildren: () => import('./pages/galeria/galeria.module').then( m => m.GaleriaPageModule)
  },
  {
    path: 'publicacoes',
    loadChildren: () => import('./pages/publicacoes/publicacoes.module').then( m => m.PublicacoesPageModule)
  },
  {
    path: 'legislacao',
    loadChildren: () => import('./pages/legislacao/legislacao.module').then( m => m.LegislacaoPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'pagamentos',
    loadChildren: () => import('./pages/pagamentos/pagamentos.module').then( m => m.PagamentosPageModule)
  },
  {
    path: 'logout',
    loadChildren: () => import('./pages/logout/logout.module').then( m => m.LogoutPageModule)
  },
  {
    path: 'hellder-benjamin',
    loadChildren: () => import('./pages/integrantes/hellder-benjamin/hellder-benjamin.module').then( m => m.HellderBenjaminPageModule)
  },
  {
    path: 'joao-paulo-cunha',
    loadChildren: () => import('./pages/integrantes/joao-paulo-cunha/joao-paulo-cunha.module').then( m => m.JoaoPauloCunhaPageModule)
  },
  {
    path: 'vanda-maria',
    loadChildren: () => import('./pages/integrantes/vanda-maria/vanda-maria.module').then( m => m.VandaMariaPageModule)
  },
  {
    path: 'pryscilla-ferreira',
    loadChildren: () => import('./pages/integrantes/pryscilla-ferreira/pryscilla-ferreira.module').then( m => m.PryscillaFerreiraPageModule)
  },
  {
    path: 'elton-vieira',
    loadChildren: () => import('./pages/integrantes/elton-vieira/elton-vieira.module').then( m => m.EltonVieiraPageModule)
  },
  {
    path: 'adalberto-oliveira',
    loadChildren: () => import('./pages/integrantes/adalberto-oliveira/adalberto-oliveira.module').then( m => m.AdalbertoOliveiraPageModule)
  },
  {
    path: 'roberto-silva',
    loadChildren: () => import('./pages/integrantes/roberto-silva/roberto-silva.module').then( m => m.RobertoSilvaPageModule)
  },
  {
    path: 'felipe-godoy',
    loadChildren: () => import('./pages/integrantes/felipe-godoy/felipe-godoy.module').then( m => m.FelipeGodoyPageModule)
  },
  {
    path: 'marco-antonio-andrade',
    loadChildren: () => import('./pages/integrantes/marco-antonio-andrade/marco-antonio-andrade.module').then( m => m.MarcoAntonioAndradePageModule)
  },
  {
    path: 'auner-pereira-carneiro',
    loadChildren: () => import('./pages/integrantes/auner-pereira-carneiro/auner-pereira-carneiro.module').then( m => m.AunerPereiraCarneiroPageModule)
  },
  {
    path: 'samil-alberto',
    loadChildren: () => import('./pages/integrantes/samil-alberto/samil-alberto.module').then( m => m.SamilAlbertoPageModule)
  },
  {
    path: 'liliam-benjamin',
    loadChildren: () => import('./pages/integrantes/liliam-benjamin/liliam-benjamin.module').then( m => m.LiliamBenjaminPageModule)
  },
  {
    path: 'karina-almeida',
    loadChildren: () => import('./pages/integrantes/karina-almeida/karina-almeida.module').then( m => m.KarinaAlmeidaPageModule)
  },
  {
    path: 'luciana-ribeiro',
    loadChildren: () => import('./pages/integrantes/luciana-ribeiro/luciana-ribeiro.module').then( m => m.LucianaRibeiroPageModule)
  },
  {
    path: 'sueli-silva',
    loadChildren: () => import('./pages/integrantes/sueli-silva/sueli-silva.module').then( m => m.SueliSilvaPageModule)
  },
  {
    path: 'jovana-patricia',
    loadChildren: () => import('./pages/integrantes/jovana-patricia/jovana-patricia.module').then( m => m.JovanaPatriciaPageModule)
  },
  {
    path: 'erica-gomes',
    loadChildren: () => import('./pages/integrantes/erica-gomes/erica-gomes.module').then( m => m.EricaGomesPageModule)
  },
  {
    path: 'erica-gomess',
    loadChildren: () => import('./pages/integrantes/erica-gomess/erica-gomess.module').then( m => m.EricaGomessPageModule)
  },
  {
    path: 'erica-gomes',
    loadChildren: () => import('./pages/integrantes/erica-gomes/erica-gomes.module').then( m => m.EricaGomesPageModule)
  },
  {
    path: 'nilcineia-silva',
    loadChildren: () => import('./pages/integrantes/nilcineia-silva/nilcineia-silva.module').then( m => m.NilcineiaSilvaPageModule)
  },
  {
    path: 'neusimar-hora',
    loadChildren: () => import('./pages/integrantes/neusimar-hora/neusimar-hora.module').then( m => m.NeusimarHoraPageModule)
  },
  {
    path: 'eber-john',
    loadChildren: () => import('./pages/integrantes/eber-john/eber-john.module').then( m => m.EberJohnPageModule)
  },
  {
    path: 'ilidia-campos',
    loadChildren: () => import('./pages/integrantes/ilidia-campos/ilidia-campos.module').then( m => m.IlidiaCamposPageModule)
  },
  {
    path: 'josely-oliveira',
    loadChildren: () => import('./pages/integrantes/josely-oliveira/josely-oliveira.module').then( m => m.JoselyOliveiraPageModule)
  },
  {
    path: 'luis-carlos',
    loadChildren: () => import('./pages/integrantes/luis-carlos/luis-carlos.module').then( m => m.LuisCarlosPageModule)
  },
  {
    path: 'cidineia-rocha',
    loadChildren: () => import('./pages/integrantes/cidineia-rocha/cidineia-rocha.module').then( m => m.CidineiaRochaPageModule)
  },
  {
    path: 'marco-aurelio-dutra',
    loadChildren: () => import('./pages/integrantes/marco-aurelio-dutra/marco-aurelio-dutra.module').then( m => m.MarcoAurelioDutraPageModule)
  },
  {
    path: 'alcilea-santos',
    loadChildren: () => import('./pages/integrantes/alcilea-santos/alcilea-santos.module').then( m => m.AlcileaSantosPageModule)
  },
  {
    path: 'andral-nunes',
    loadChildren: () => import('./pages/integrantes/andral-nunes/andral-nunes.module').then( m => m.AndralNunesPageModule)
  },
  {
    path: 'mario-terra-filho',
    loadChildren: () => import('./pages/integrantes/mario-terra-filho/mario-terra-filho.module').then( m => m.MarioTerraFilhoPageModule)
  },
  {
    path: 'maria-geni-almeida',
    loadChildren: () => import('./pages/integrantes/maria-geni-almeida/maria-geni-almeida.module').then( m => m.MariaGeniAlmeidaPageModule)
  },
  {
    path: 'wallace-randolph',
    loadChildren: () => import('./pages/integrantes/wallace-randolph/wallace-randolph.module').then( m => m.WallaceRandolphPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/inside/home/home.module').then( m => m.HomePageModule)
  },  {
    path: 'trabalheconosco',
    loadChildren: () => import('./pages/trabalheconosco/trabalheconosco.module').then( m => m.TrabalheconoscoPageModule)
  }


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}


const app = new Vue({
    el: '#app',
    data: {
      indexActive:0,
      search:"",
      reply:"",
      contacts: [
        {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                        {
                                date: '10/01/2020 15:30:55',
                                text: 'Hai portato a spasso il cane?',
                                status: 'sent',
                                dropdown:false,
                        },
                        {
                                date: '10/01/2020 15:50:00',
                                text: 'Ricordati di dargli da mangiare',
                                status: 'sent',
                                dropdown:false,
                        },
                        {
                                date: '10/01/2020 16:15:22',
                                text: 'Tutto fatto!',
                                status: 'received',
                                dropdown:false,
                        }
                ],
        },
        {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                        {
                                date: '20/03/2020 16:30:00',
                                text: 'Ciao come stai?',
                                status: 'sent',
                                dropdown:false,
                        },
                        {
                                date: '20/03/2020 16:30:55',
                                text: 'Bene grazie! Stasera ci vediamo?',
                                status: 'received',
                                dropdown:false,
                        },
                        {
                                date: '20/03/2020 16:35:00',
                                text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                                status: 'sent',
                                dropdown:false,
                        }
                ],
        },
        {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                        {
                                date: '28/03/2020 10:10:40',
                                text: 'La Marianna va in campagna',
                                status: 'received',
                                dropdown:false,
                        },
                        {
                                date: '28/03/2020 10:20:10',
                                text: 'Sicuro di non aver sbagliato chat?',
                                status: 'sent',
                                dropdown:false,
                        },
                        {
                                date: '28/03/2020 16:15:22',
                                text: 'Ah scusa!',
                                status: 'received',
                                dropdown:false,
                        }
                ],
        },
        {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                        {
                                date: '10/01/2020 15:30:55',
                                text: 'Lo sai che ha aperto una nuova pizzeria?',
                                status: 'sent',
                                dropdown:false,
                        },
                        {
                                date: '10/01/2020 15:50:00',
                                text: 'Si, ma preferirei andare al cinema',
                                status: 'received',
                                dropdown:false,
                        }
                ],
        },
]
},
  methods:{
active(index){
  this.indexActive=index;
},
searchcontact(contact){
  if(this.search=='' || this.search.includes(contact.name)){
    return true;
  } else{return false;}
},
showDropdown(message){
message.dropdown=true;
},
deleteMessage(index){
  this.contacts[this.indexActive].messages.splice(index,1);
},
sendMessage(){
  let self=this;
  if(this.reply!= ''){
this.contacts[this.indexActive].messages=[
  ...this.contacts[this.indexActive].messages,
  {
            date: '10/01/2020 15:30:55',
            text: this.reply,
            status: 'sent'
  }];
  setTimeout(function(){
    self.contacts[self.indexActive].messages=[
      ...self.contacts[self.indexActive].messages,
      {
        date: '10/01/2020 15:30:55',
        text: 'ciao',
        status: 'received'

      }

  ]},5000);
}
}
},
mounted(){
  let self=this;
  axios.get('https://flynn.boolean.careers/exercises/api/array/music')
  .then(function(response){

     });

}

});

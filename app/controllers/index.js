// app/controllers/index.js
import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  reference: Math.random().toString(36).slice(2),


  actions: {
    saveInvitation() {
     this.set('responseMessage', `Thank you! We saved your email address with the following id: -${this.get('reference')}`);
     this.set('emailAddress', '');
   }
  }
});

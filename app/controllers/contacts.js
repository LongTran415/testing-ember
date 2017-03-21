import Ember from 'ember';

export default Ember.Controller.extend({
  message: null,
  emailAddress: null,

  validEmail: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  validMessage: Ember.computed('message', function(){
    return (this.get('message.length') > 5);
  }),

  isValid: Ember.computed.and('validEmail', 'validMessage'),
  isDisabled: Ember.computed.not('isValid'),
  isShowingConfirmation: false,
  reference: Math.random().toString(36).slice(2),

  actions: {
    saveContact() {
      this.set('isShowingConfirmation', true);
    }
  }
});

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


  actions: {
    saveContact() {
      const email = this.get('emailAddress');
      const message = this.get('message');

      const newContact = this.store.createRecord('contact', { email: email, message: message });

      newContact.save().then((response) => {
        const reference = response.get('id');
        this.set('reference', reference);

        this.set('isShowingConfirmation', true);
      });
    }
  }
});

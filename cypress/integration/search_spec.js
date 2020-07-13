describe('Application', function () {
  context('Smoke test', function () {
    beforeEach(() => {
      cy.server({ force404: true });
      cy.fixture('user.json').as('userJSON');
      cy.fixture('repos.json').as('reposJSON');
      cy.fixture('avatar.jpg').as('avatar');
      cy.route('GET', `/avatar.jpg`, '@avatar').as('getUser');
    });

    it('make a search and redirect to result page', function () {
      const searchParam = 'PhilipeGatis';
      cy.route('GET', `/users/${searchParam}`, this.userJSON).as('getUser');
      cy.route('GET', `/users/${searchParam}/repos`, this.reposJSON).as('getRepo');
      cy.visit('/');
      cy.get('input[id=searchInput]').type(`${searchParam}{enter}`);
      cy.wait(['@getUser', '@getRepo']);
      cy.url().should('include', `/${searchParam}`);
    });

    it('make a search unexist user and redirect to error', function () {
      const userNotExist = 'UserWhitNotExists';
      cy.visit('/');
      cy.route('GET', `/users/forceError404${userNotExist}`).as('getError');
      cy.location('pathname').should('equal', '/');
      cy.get('input[id=searchInput]').type(`${userNotExist}{enter}`);
      cy.url().should('include', `/?error=`);
    });

    it('show error message and remove after certain time', function () {
      const message = 'Error message';
      cy.visit(`/?error=${message}`);
      cy.url().should('include', `/?error=`);
      cy.wait(10);
      cy.get('span').contains(message).should('to.exist');
      cy.get('span').contains(message).should('not.exist');
    });

    it('validate results are showed and count starts are correct', function () {
      const searchParam = 'PhilipeGatis';
      cy.route('GET', `/users/${searchParam}`, this.userJSON).as('getUser');
      cy.route('GET', `/users/${searchParam}/repos`, this.reposJSON).as('getRepo');
      cy.visit(`/${searchParam}`);
      cy.wait(['@getUser', '@getRepo']);
      cy.get('li[class=ant-list-item]').should(($li) => {
        expect($li).to.have.length(this.reposJSON.length);
        this.reposJSON.forEach((item, i) => {
          expect($li.get(i))
            .to.contain(item.stargazers_count)
            .to.contain(item.name)
            .to.contain(item.description || item.language);
          expect($li.children().find('a')).to.have.attr('target', '_blank');
        });
      });
    });

    it('validate header back button return to search page', function () {
      const searchParam = 'PhilipeGatis';
      cy.route('GET', `/users/${searchParam}`, this.userJSON).as('getUser');
      cy.route('GET', `/users/${searchParam}/repos`, this.reposJSON).as('getRepo');
      cy.visit(`/${searchParam}`);
      cy.wait(['@getUser', '@getRepo']);
      cy.get('a[id=back]').click();
      cy.location('pathname').should('equal', '/');
    });
  });
});

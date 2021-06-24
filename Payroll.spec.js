describe ('ERP Tenant Login', () => {
    it('Login', () => {
        cy.visit('https://finnewerpclient.azurewebsites.net/')
        cy.contains('Change').click()
        cy.contains('Switch to tenant').should('be.visible')
        cy.get('.kt-switch > label > span').click()
        cy.get('#tenancyNameInput').type('testB')
        cy.wait(4000)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(4000)
        cy.get('.kt-form > :nth-child(1) > .form-control').type('admin')
        cy.get(':nth-child(2) > .form-control').type('test123')
        cy.get('.btn').click()
        //git o ga
        
    })

    it('Ensure the side menu bar displays', () => {
        //cy.visit('https://finnewerpclient.azurewebsites.net/')
        //cy.contains('Change').click()
        //cy.contains('Switch to tenant').should('be.visible')
        //cy.get('.kt-switch > label > span').click()
        //cy.get('#tenancyNameInput').type('testA')
        //cy.wait(2000)
        //cy.get('.modal-footer > .btn-primary').click()
        //cy.wait(2000)
        //cy.get('.kt-form > :nth-child(1) > .form-control').type('admin')
        //cy.get(':nth-child(2) > .form-control').type('test123')
        //cy.get('.btn').click()
        cy.wait(4000)
        cy.get('#kt_aside_mobile_toggler').click()
        
        
    })
    
    it('Ensure user can access the Accounts dropdown', () => {
        // cy.visit('https://finnewerpclient.azurewebsites.net/')
        // cy.contains('Change').click()
        // cy.contains('Switch to tenant').should('be.visible')
        // cy.get('.kt-switch > label > span').click()
        // cy.get('#tenancyNameInput').type('testA')
        // cy.wait(2000)
        // cy.get('.modal-footer > .btn-primary').click()
        // cy.wait(2000)
        // cy.get('.kt-form > :nth-child(1) > .form-control').type('admin')
        // cy.get(':nth-child(2) > .form-control').type('test123')
        // cy.get('.btn').click()
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.wait(4000)
        cy.get('.kt-menu__nav > :nth-child(3) > :nth-child(1) > .kt-menu__link-text').click()

        
        
    })

    it('Ensure user can access the Payroll dropdown', () => {
    cy.get('[kt-hidden-height="160"] > :nth-child(2) > :nth-child(1) > :nth-child(1) > .kt-menu__link-text').click()
    cy.get('[kt-hidden-height="120"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__toggle > .kt-menu__link-text').click()  //Setup
    
    //Company Structure
    cy.get('[kt-hidden-height="120"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__submenu > .kt-menu__subnav > :nth-child(1) > .kt-menu__link > .kt-menu__link-text').click() //Company Structure
    //Company Subsidiary
    cy.url().should('eq','https://finnewerpclient.azurewebsites.net/app/setup/payroll/companysubsidiary')
    cy.screenshot('Capturing the screenshot');
    cy.get('input[name="subname"]').type('test') //Subsidairy
    //cy.screenshot('Capturing the screenshot');
    cy.get('form.ng-tns-c432-16 > :nth-child(2) > .form-group > .btn').click()//Save
    //Branch
    cy.get('.nav-item.active > .nav-link > span').click() //Branch
    cy.get('.kt-form > .ng-tns-c432-16 > .ng-invalid.ng-dirty > :nth-child(1) > :nth-child(1) > .form-group > .form-control').select('').should('be.visible', '') //Subsidairy dropdown
    cy.get('#br').type('Chief') //Branch name
    cy.get('#addr').type("Gbagada") //Address
    cy.get('#email').type('el_flexzy@yahoo.com') //Email
    cy.get('#address').type('08050614808') //Phone Number (Element should be "phone" not address)
    cy.get('.ng-invalid.ng-dirty > .text-right > .btn').click()
    //Department
    cy.get('.active > .kt-form > .ng-tns-c432-16 > .ng-invalid.ng-touched > .row > :nth-child(1) > .form-group > .form-control').select('').should('be.visible', '') //Company Subsidairy
    cy.get('.active > .kt-form > .ng-tns-c432-16 > .ng-invalid.ng-touched > .row > :nth-child(2) > .form-group > .form-control').select('test').should('be.visible', 'test') //Branch
    cy.get(':nth-child(3) > .form-group > #dpt').type('Quality Assurance') //Department
    cy.get('.active > .kt-form > .ng-tns-c432-16 > form.ng-pristine > .text-right > .btn').click() //Save

    })
    // Logout
    // cy.get('#kt_header_mobile_topbar_toggler > .flaticon-more').click()
    // cy.get('.kt-header__topbar-username').click()
    // cy.get(':nth-child(6) > .kt-notification__item-details > .kt-notification__item-title').click()
})




    // it.only('Setup Account Period', () => {
    //     cy.visit('https://finnewerpclient.azurewebsites.net/')
   
        // cy.get('.ng-star-inserted > a.ng-tns-c408-1').click()
        // cy.get('.btn').click()
        // cy.get(':nth-child(2) > .form-control').type('TestC') //Tenancy Name
        // cy.get(':nth-child(3) > .form-control').type('012') //Short Code
        // cy.get(':nth-child(5) > .form-control').type('dharmelorlar88@gmail.com') //admin mail
        // cy.get(':nth-child(6) > .form-control').type('testing') //admin password
        // cy.get(':nth-child(7) > .form-control').type('testing') //repeat password
        // cy.get('.btn-primary').click()
   // })

    // it('Chart of Account', () => {
    //     cy.get('#kt_aside_mobile_toggler').click()
    //     cy.get('.kt-menu__nav > :nth-child(3) > :nth-child(1) > .kt-menu__link-text').click()
    //     cy.get(':nth-child(2) > :nth-child(3) > .kt-menu__toggle > .kt-menu__link-text').click()
    //     cy.get(':nth-child(2) > .kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(1) > .kt-menu__link > .kt-menu__link-text').click()
    //     cy.get(':nth-child(2) > .kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(1) > .kt-menu__link > .kt-menu__link-text').click()
    // })
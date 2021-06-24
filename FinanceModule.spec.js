describe('ERP Finance Module', () => {
    beforeEach(() => {
        cy.visit('https://finnewerpclient.azurewebsites.net/')
        //cy.wait(50000)
        cy.contains('Change').click()
        cy.contains('Switch to tenant').should('be.visible')
        cy.get('.kt-switch > label > span').click()
        cy.get('#tenancyNameInput').type('testB').should('be.visible', 'testA')
        cy.wait(4000)
        cy.get('.modal-footer > .btn-primary').click()
        cy.wait(4000)
        cy.get('.kt-form > :nth-child(1) > .form-control').type('admin')
        cy.get(':nth-child(2) > .form-control').type('123456')
        cy.get('.btn').click()
        //git
        // Logout
    // cy.get('#kt_header_mobile_topbar_toggler > .flaticon-more').click()
    // cy.get('.kt-header__topbar-username').click()
    // cy.get(':nth-child(6) > .kt-notification__item-details > .kt-notification__item-title').click()
    })

    // it('Setup Account Period', () => { //This test only works for new tenant 
    //     cy.get(':nth-child(1) > .form-group > .form-control').select('June').should('be.visible', 'June') //Start Month Period
    //     cy.get(':nth-child(2) > .form-group > .form-control').select('May').should('be.visible', 'May') //End Month Period
    //     cy.get('.col-12 > .text-right > .btn').click() //Next
    //     //Set Commencement Date
    //     cy.get(':nth-child(1) > .form-group > .form-control').click() //Calendar
    //     cy.get('.previous > span').click() //Previous
    //     cy.get(':nth-child(1) > :nth-child(6) > span').click() //Date
    //     //Upload Chart of Account
    //     const fixtureFile = 'ChartofAccountSample.xlsx';
    //     cy.get('form.ng-tns-c404-17 > .row > .col-md-6 > .form-control').attachFile(fixtureFile);
    //     cy.get('.btn').click()
    //     cy.get('.ng-star-inserted > .btn').click()  //Upload
    //     cy.get('.col-12 > .text-right > .btn').click() //Next
    //     //Upload Trial Balance
    //     const fixtureFile = 'TBSample.xlsx';
    //     cy.get('.primeng-datatable-container > .row > :nth-child(1) > .form-control').attachFile(fixtureFile);
    //     cy.get('.btn').click()
    //     cy.get('.primeng-datatable-container > .row > .text-right > .ng-star-inserted > .btn').click()
    //     cy.get('#test-l-4 > :nth-child(2) > :nth-child(2) > .text-right > .btn').click() //Complete

    // })

    it('View Audit Logs', () => {
        cy.wait(4000)
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(2) > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get('.kt-menu__item--submenu.kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(4) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get(':nth-child(1) > :nth-child(1) > .text-center > .btn').click()
        cy.wait(7000)
        cy.screenshot()
        cy.get('auditlogdetailmodal.ng-tns-c407-13 > .modal > .modal-dialog > .modal-content > .ng-untouched > .modal-footer > .btn-default').click()
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(1) > .kt-menu__link > .kt-menu__link-text').click()
    })

    it('Journal Entry', () => {
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(3) > :nth-child(1) > .kt-menu__link-text').click()
        cy.get(':nth-child(2) > :nth-child(4) > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get(':nth-child(2) > .kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(3) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get(':nth-child(2) > .kt-menu__item--submenu.kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(4) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get(':nth-child(1) > :nth-child(1) > .form-group > .form-control').select('ACCESS BANK LOAN A/C').should('be.visible', 'ACCESS BANK LOAN A/C')
        //cy.get('#SampleDatePicker').click()
        //cy.get('.form-group > .input-group > div.input-group-append > .input-group-append').click()
        //cy.get('tbody > :nth-child(1) > :nth-child(3) > span').click()
        cy.get('#inputDebit').clear().type('6000000')
        //cy.get('#inputCredit').clear().type('5000000')
        cy.get(':nth-child(2) > .col-md-6 > .form-group > .form-control').type('Testing')
        cy.get('.pull-right > .btn').click()
    })

    it('Generate Financial Statement', () => {
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(8) > :nth-child(1) > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__submenu > .kt-menu__subnav > :nth-child(2) > .kt-menu__link > .kt-menu__link-text').click()
        //cy.get(':nth-child(2) > .kt-menu__item--submenu > .kt-menu__submenu > .kt-menu__subnav > .kt-menu__item--active > .kt-menu__link > .kt-menu__link-text').click()
        cy.get('.form-group > :nth-child(1) > .form-control').select('Friday test Buchi').should('be.visible', 'Friday test Buchi')
        cy.get(':nth-child(2) > .form-control').select('28-Feb-2021').should('be.visible', '28-Feb-2021')
        cy.get('.pull-right > .btn').click()
        cy.wait(7000)
        cy.get(':nth-child(2) > .close').click()
    })

    it('Generate General Ledger', () => {
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(8) > :nth-child(1) > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__submenu > .kt-menu__subnav > :nth-child(3) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get(':nth-child(1) > .form-group > .form-control').select('ACCESS BANK LOAN A/C').should('be.visible', 'ACCESS BANK LOAN A/C')
        cy.get('#StartEndRangeEntityChange').click()
        //cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(1) > :nth-child(8) > span').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .previous > span').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-head > bs-datepicker-navigation-view > .previous > span').click()
        cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(3) > :nth-child(2) > span').click()
        //cy.get(':nth-child(1) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(5) > :nth-child(8) > span').click()
        cy.get(':nth-child(2) > bs-calendar-layout > .bs-datepicker-body > .days > tbody > :nth-child(1) > :nth-child(8) > span').click()
        cy.get('.pull-right > .btn').click()
        cy.wait(90000)
        cy.get(':nth-child(2) > .close').click()
    })

    it('Generate Trial Balance', () => {
        //cy.get('#kt_aside_mobile_toggler').click()
        cy.get('.kt-menu__nav > :nth-child(8) > :nth-child(1) > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get('[kt-hidden-height="80"] > :nth-child(2) > .kt-menu__item--submenu > .kt-menu__submenu > .kt-menu__subnav > :nth-child(4) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get('.col-lg-10 > .form-control').select('28-Feb-2021').should('be.visible', '28-Feb-2021')
        cy.get('.col-lg-2 > .btn').click()
        cy.wait(7000)
        cy.get(':nth-child(2) > .close').click()
          //Logout
        //cy.get('#kt_header_mobile_topbar_toggler > .flaticon-more').click()
        cy.get('.kt-header__topbar-username').click()
        cy.get(':nth-child(6) > .kt-notification__item-details > .kt-notification__item-title').click()
    })

    it.only('Defaul Account Details', () => {
        cy.get('.kt-menu__nav > :nth-child(3) > :nth-child(1) > .kt-menu__link-text').click()
        cy.get(':nth-child(2) > :nth-child(3) > .kt-menu__toggle > .kt-menu__link-text').click()
        cy.get(':nth-child(2) > .kt-menu__item--open > .kt-menu__submenu > .kt-menu__subnav > :nth-child(2) > .kt-menu__link > .kt-menu__link-text').click()
        cy.get(':nth-child(1) > .form-group > .ng-select > .ng-select-container > .ng-value-container > .ng-input > input').select('Sales').should('have.attr', 'role')
        //commit
    })
}) 

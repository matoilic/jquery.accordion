describe("jquery.accordion", function() {
    beforeEach(function() {
        $('#wrapper').html($('#template').html());
    });

    it("restores the proper dimensions", function() {
        var $accordion = $('#accordion').accordion({duration: 0}), $panel;
        $accordion.find('>li:nth-child(2)>.handle').click();
        $panel = $accordion.find('>li:nth-child(2)>.panel');

        expect($panel.height()).toEqual(80);
        expect($panel.innerHeight()).toEqual(83);
        expect($panel.css('marginBottom')).toEqual('2px');
        expect($panel.css('marginTop')).toEqual('1px');
    });

    it("hides the overflow when closing a panel", function() {
        var $panel = $('#accordion').accordion({duration: 0}).find('>li:nth-child(2)>.panel');

        expect($panel.css('overflow')).toEqual('hidden');
    });

    it("restores the overflow property", function() {
        var $accordion = $('#accordion').accordion({duration: 0}), $panel;
        $accordion.find('>li:nth-child(2)>.handle').click();
        $panel = $accordion.find('>li:nth-child(2)>.panel');

        expect($panel.css('overflow')).toEqual('visible');
    });

    it("adds the open class", function() {
        var $accordion = $('#accordion').accordion({duration: 0}), $wrapper;
        $accordion.find('>li:nth-child(2)>.handle').click();
        $wrapper = $accordion.find('>li:nth-child(2)');

        expect($wrapper.hasClass('open')).toBeTruthy();
    });

    it("opens multiple panels", function() {
        var $accordion = $('#accordion').accordion({duration: 0, multiple: true});
        $accordion.find('>li:nth-child(2)>.handle').click();

        expect($accordion.find('>li:nth-child(1)').hasClass('open')).toBeTruthy();
        expect($accordion.find('>li:nth-child(2)').hasClass('open')).toBeTruthy();
    });

    it("toggles panels", function() {
        var $accordion = $('#accordion').accordion({duration: 0, toggle: true});
        $accordion.find('>li:nth-child(2)>.handle').click().click();

        expect($accordion.find('>li:nth-child(2)').hasClass('open')).toBeFalsy();
    });

    it("enables toggling in multiple mode", function() {
        var $accordion = $('#accordion').accordion({duration: 0, multiple: true});
        $accordion.find('>li:nth-child(2)>.handle').click().click();

        expect($accordion.find('>li:nth-child(2)').hasClass('open')).toBeFalsy();
    });

    it("doesn't change static panels", function() {
        var $accordion = $('#static-accordion').accordion({duration: 0}), $panel;
        $accordion.find('>li:nth-child(2)>.handle').click();
        $panel = $accordion.find('>li:nth-child(1)>.panel');

        expect($panel.innerHeight()).toEqual(83);
    });

    it("opens the right panel at the beginning", function() {
        var $accordion = $('#static-accordion').accordion({duration: 0, start: 2}), $panel;
        $panel = $accordion.find('>li:nth-child(2)>.panel');

        expect($panel.innerHeight()).toEqual(83);
    });
});
/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* All of our tests are placed within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty.
         */
         const len=allFeeds.length;
         
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(len).not.toBe(0);
        });
        
       

        
        /* This is the test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
            
            it('Url must be defined', function() {
                for(var i=0;i<len;i++){
                expect(allFeeds[i].url).toBeDefined(); // Check defined
                expect(allFeeds[i].url).not.toEqual(''); // Check non-empty
               }
            });
        
         

        /* The test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('Names must be defined', function() {
                for(var i=0;i<len;i++){
                expect(allFeeds[i].name).toBeDefined(); // Check defined
                expect(allFeeds[i].name).not.toEqual(''); // Check non-empty
               }
            });

    });


    /* New test suite named "The menu" */
describe('The Menu', function() {
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('Menu is hidden by default',function(){
        expect($('body').hasClass('menu-hidden')).toBe(true)
        });

         /* Test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
          it('Menu display when clicked',function(){
            $('a.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(false);  
            $('a.menu-icon-link').click();
              expect($('body').hasClass('menu-hidden')).toBe(true);
            
          });

        
});
    /* New test suite named "Initial Entries" */

describe('Initial Entries',function(){


        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         */
         beforeEach(function(done) {
        loadFeed(0,done);
     });
        
         
         it('There is atleast one entry',function(){
            expect($('.feed .entry').length).not.toBeLessThan(0);
            

         });
});
    /* New test suite named "New Feed Selection" */

describe('New Feed Selection',function() {
        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         
         */
         var oldfeeds;

         beforeEach(function(done) {

loadFeed(0, function() {

// feed 0 done loading

var prevUrl = $('.feed').html();

loadFeed(1, function(){

  // feed 1 done loading


  done();

});
});

});
         
        it('Newentry is different from old',function(){
            var newUrl =$('.feed').html();
            expect($('.feed').html()).not.toEqual('prevUrl');
        });
});
}());

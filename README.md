# Project Overview

In this project you are given a web-based application that reads RSS feeds. The original developer of this application clearly saw the value in testing, they've already included [Jasmine](http://jasmine.github.io/) and even started writing their first test suite! Unfortunately, they decided to move on to start their own company and we're now left with an application with an incomplete test suite. That's where you come in.


## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. All the tests initially fail and then they start writing application code to make these tests pass.

Whether you work in an organization that uses test-driven development or in an organization that uses tests to make sure future feature development doesn't break existing features, it's an important skill to have!



# How the project works?

The main motive of the project is to write tests ,here are the tests I have made while completing the FeedReader project

1.In the suite RSS Feader -
a)Wrote a test that loops through each feed in the allFeeds object and ensures it has a URL defined and that the URL is not empty.
b)In the suite RSS Feader -
Wrote a test that loops through each feed in the allFeeds object and ensures it has a name defined and that the name is not empty.

2.In the new suite 'The Menu'-
a)A test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element.
b)Also the test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again.

3.New suite named 'Initial Entries'-
a)In the asynchronous function loadFeed() tTest that ensures when the loadFeed function is called and completes its work, there is at least a single .entry element within the .feed container is done.

4.Another asynchronous suite 'New Feed Selection'-
a)Test that ensures when a new feed is loaded by the loadFeed function that the content actually changes."# FeedReaderTesting" 

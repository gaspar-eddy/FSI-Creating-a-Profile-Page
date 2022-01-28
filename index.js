let content = document.querySelector('.js-generated.content')

//Create h1 element
let header = document.createElement('h1')
// Set class attribute
header.setAttribute('class', 'dog-name')
// Append dog name
header.append('Rizzo')
// Append it to content container
content.append(header)

// Create div element
let dogContent = document.createElement('div')
// Set class attribute
dogContent.setAttribute('class', 'dog-content')
// Append to content container
content.append(dogContent)

// Create img element
let dogImage = document.createElement('img')
// Set class attribute
dogImage.setAttribute('class', 'dog-image')
// Set src attribute
dogImage.setAttribute('src', './assets/rizzo.jpg')
// Append dogImage to dogContent 
dogContent.append(dogImage)

// Create another div element and append to dogContent
let dogDetails = document.createElement('div')
dogDetails.setAttribute('class', 'dog-details')
dogContent.append(dogDetails)

// Create h3 element and append to dog-details
let description = document.createElement('h3')
description.textContent = 'Description'
dogDetails.append(description)

// Create paragraph element and append to dog-details
let paragraph = document.createElement('p')
paragraph.textContent = 'This gentle dog is aloof toward her owner, and never comes when called. She always acts as though any stranger she meets will harm her, and dislikes other animals.'
dogDetails.append(paragraph)

// Another h3 element & append to dog-details
let feedingTimesHeading = document.createElement('h3')
feedingTimesHeading.textContent = 'Feeding Times:'
dogDetails.append(feedingTimesHeading)

// Create ul and append to dog-details
let timeList = document.createElement('ul')
dogDetails.append(timeList)

// add times to list and append to timeList
let time1 = document.createElement('li')
let time2 = document.createElement('li')
let time3 = document.createElement('li')

time1.textContent = '9:00 am'
time2.textContent = '12:00 pm'
time3.textContent = '5:00 pm'

timeList.append(time1)
timeList.append(time2)
timeList.append(time3)



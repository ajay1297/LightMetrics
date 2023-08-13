# LightMetrics

## Design a system to get a list of comments for a user and replies for that comment

## API's

### Create User

POST Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/user/create

{
"name":"Flash",
"password":"password5",
"email":"flash@test.com"
}

Creates the User and saves data into Database and returns UserId.

### Create Comment

POST Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/create

{
"comment":"child 2 level 3",
"userid":3,
"commentid":11 // required for nested comments only
}

commentid is required for nested comments only. It is not required for parent comment

Creates the Comment and saves data into Database and returns CommentId.

### Update Comment

PUT Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/update/:commentid

{
"comment":"Updated comment"
}

Updates the comment in the database based on the commentId.

### Delete Comment

DELETE METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/update/:commentid

Deletes the comment from the Database.

### Get All Comments for User

GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/allcomments

{
"userid":8
}

Returns all the comments for which user has commented

### Get All Sub Nested Comments for A comment

GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/nestedcomments

{
"commentid":8
}

Returns all the child or nested comments for the comment provided in the body

### Get Single Comment for User

GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment

{
"commentid":8
}

Returns the comment for the given commentId

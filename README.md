# LightMetrics

## Design a system to get a list of comments for a user and replies for that comment

### API's

Create User - POST Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/user/create 
Body - {name, password, email}

Create Comment - POST Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/create
Body - {comment, userid, commentid(only for nested comments)}

Update Comment - PUT Method - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/update/:commentid
Body - {comment}

Delete Comment - DELETE METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/update/:commentid
Body - {}

Get All Comments for User - GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/allcomments
Body - {userid}

Get All Sub Nested Comments for A comment - GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment/nestedcomments
Body - {commentid}

Get Single Comment for User - GET METHOD - https://f541-157-45-198-244.ngrok-free.app/api/v1/comment
Body - {commentid, userid}

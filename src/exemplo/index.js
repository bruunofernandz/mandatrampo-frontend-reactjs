fetch("http://www.mandatrampo.com.br:3333/profile", {
      "method": "PUT",
      "headers": {
        "content-type": "application/json",
        "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJsZXZlbCI6IlUiLCJpYXQiOjE1OTQwNTQ3NDgsImV4cCI6MTU5NDIyNzU0OCwic3ViIjoiM2M5ODU5NGMtZGVhNC00ZWFlLTliN2MtOWI1MTNjNGZiYmM4In0.U5VB2JXbXMyBH5sUiwqwSJzYFyKTf4nVZk_2tOikkGw"
      },
      "body": {
        "name": "Jhon Joe",
        "email": "jhon@email.com",
        "login": "latejano",
        "phone": "551999999999",
        "celphone": "551999999999",
        "address": "ANTONIO DE ALMEIDA",
        "city": "ARARAS",
        "state": "SP",
        "iswhats": true
      }
    })
    .then(response => {
      console.log(response);
    })
    .catch(err => {
      console.log(err.response);
    });

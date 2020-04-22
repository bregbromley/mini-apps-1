// var makeRequest = function(e) {
//   console.log('i ran');
//   console.log(typeof e);
//   // e.preventDefault();
//   $.ajax({
//     url:'/upload_JSON',
//     type: 'POST',
//     data: e,
//     contentType: 'application/json',
//     success: function(data){ $("#response").html(data)},
//     error: function(data) {
//       console.log('ERROR DATA: ', data.responseText);
//       alert(`ERROR status code: ${data.status}`);
//     }
//   });
// }

// $('form').on('submit', makeRequest);

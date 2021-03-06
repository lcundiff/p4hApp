$(document).on("click", ".reply_button", function (e) {
  /* old regular expression I was using to find all reply ids: a[id|='reply' */
  e.preventDefault();
  var id_number = e.currentTarget.name;
  console.log("comment_id " + id_number);
  var value = $("#textbox-" + id_number).val();
  console.log(value);

  //alert(value);
  $.ajax({
    type: "POST",
    url: "/comment_" + id_number,
    data: JSON.stringify({ text: value }),
    contentType: "application/json; charset=utf-8",
    dataType: "text",
    error: function (data) {
      response = eval(data);
      comment = JSON.stringify(response);
      console.log("error" + comment);
    },
    success: function (data) {
      comment = data;
      console.log("ajax return comment ", comment);
      $("#comments-" + id_number).append(comment);
    },
  });
});
// handle posts
$("#post").on("click", function (e) {
  e.preventDefault();
  var value = $("#textbox_post").val();
  console.log(value);
  //alert(value);
  $.ajax({
    type: "POST",
    url: "/post_announcement",
    data: JSON.stringify({ text: value }),
    contentType: "application/json; charset=utf-8",
    dataType: "text",
    error: function (data) {
      response = eval(data);
      post = JSON.stringify(response);
      console.log("error" + post);
    },
    success: function (data) {
      post = data;
      //console.log(post)
      $("#write_post").append(post);
    },
  });
});
// handle textbox
$(function () {
  //  changes mouse cursor when highlighting loawer right of box
  $("textarea")
    .mousemove(function (e) {
      var myPos = $(this).offset();
      myPos.bottom = $(this).offset().top + $(this).outerHeight();
      myPos.right = $(this).offset().left + $(this).outerWidth();

      if (
        myPos.bottom > e.pageY &&
        e.pageY > myPos.bottom - 16 &&
        myPos.right > e.pageX &&
        e.pageX > myPos.right - 16
      ) {
        $(this).css({ cursor: "nw-resize" });
      } else {
        $(this).css({ cursor: "" });
      }
    })
    //  the following simple make the textbox "Auto-Expand" as it is typed in
    .css("overflow", "hidden")
    .keyup(function (e) {
      //  this if statement checks to see if backspace or delete was pressed, if so, it resets the height of the box so it can be resized properly
      if (e.which == 8 || e.which == 46) {
        $(this).height(
          parseFloat($(this).css("min-height")) != 0
            ? parseFloat($(this).css("min-height"))
            : parseFloat($(this).css("font-size"))
        );
      }
      //  the following will help the text expand as typing takes place
      while (
        $(this).outerHeight() <
        this.scrollHeight +
          parseFloat($(this).css("borderTopWidth")) +
          parseFloat($(this).css("borderBottomWidth"))
      ) {
        $(this).height($(this).height() + 1);
      }
    });
});

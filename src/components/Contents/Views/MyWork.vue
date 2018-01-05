<template>
  <div class="row">
    <div class="col-lg-12 col-md-12">
      <div class="card">
        <a href="#" class="edit-menu"><i class="fa fa-ellipsis-v"></i></a>
        <div class="content">
          <div class="description card-feed">
            <img class="avatar border-white card-feed-avatar" src="static/img/faces/face-2.jpg" alt="avatar">
            <div class="card-feed-info">
              <ul>
                <li class="card-feed-name">Chet Faker</li>
                <li>
                  <small>Development</small><small class="minute-info">|</small><small>3 minute ago</small>
                </li>
              </ul>
            </div>
          </div>
          <div class="description feed-content-title card-feed-name">
            UI/UX Design
          </div>
          <div class="description">
            I like the way you work it No diggity I wanna bag it up
          </div>
        </div>
        <div class="card-feed-function">
          <a href="#" class="icon-align">
            <i class="fa fa-clock-o icon-size"></i> Extension
          </a>
          <a href="#" class="icon-align">
            <i class="fa fa-calendar-check-o icon-size"></i> Status
          </a>
          <a href="#" class="icon-align">
            <i class="fa fa-star icon-size"></i> Favorite
          </a>
        </div>
        <div class="card-feed-comment">
          <div>
            <img class="avatar border-white card-feed-avatar card-feed-comment-avatar"src="static/img/faces/face-3.jpg" alt="avatar">
            <div class="row width-comment">
              <div class="card card-feed-comment-text">
                <span class="comment-author-name">Adam Smith</span>
                <span class="comment-content">And trust me I'll give it a chance now</span>
              </div>
              <div class="feed-comment-function">
                <span class="comment-content"><a href="#">reply</a></span>
                <span class="minute-info">·</span>
                <span class="comment-content">3 second ago</span>
              </div>
            </div>
          </div>
          <div>
            <img class="avatar border-white card-feed-avatar card-feed-comment-avatar"src="static/img/faces/face-3.jpg" alt="avatar">
            <div class="row width-comment">
              <div class="comment-textarea">
                <div class="card card-feed-comment-text feed-comment-input">
                  <textarea class="comment-input-text form-control" v-autosize="commentText" placeholder="Please enter your comment ...">{{commentText}}</textarea>
                </div>
              </div>
              <div class="comment-submit">
                <button class="btn btn-sm btn-fill">Input</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  /* eslint-disable quotes */
  export default {
    data () {
      return {
        commentText: '',
        windowWidth: ''
      }
    },
    mounted () {
      console.log(this)
    },
    methods: {
      resize (obj) {
        console.log(obj)
        obj.style.height = "1px"
        obj.style.height = (12 + obj.scrollHeight) + "px"
      }
    }
  }

</script>
<style scoped>
</style>

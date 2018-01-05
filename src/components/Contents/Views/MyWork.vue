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
          <img class="avatar border-white card-feed-avatar card-feed-comment-avatar"src="static/img/faces/face-3.jpg" alt="avatar">
          <div class="row width-feed-comment">
            <div class="card card-feed-comment-text">
              <span class="comment-author-name">Adam Smith</span>
              <span class="comment-text">And trust me I'll give it a chance now</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    /**
     * Chart data used to render stats, charts. Should be replaced with server data
     */
    data () {
      return {
        statsCards: [
          {
            type: 'warning',
            icon: 'ti-server',
            title: 'Capacity',
            value: '105GB',
            footerText: 'Updated now',
            footerIcon: 'ti-reload'
          },
          {
            type: 'success',
            icon: 'ti-info',
            title: 'My Work',
            value: '3',
            footerText: 'Work View',
            footerIcon: 'ti-files'
          },
          {
            type: 'danger',
            icon: 'ti-pie-chart',
            title: 'Progress Rate',
            value: '23%',
            footerText: 'Detail View',
            footerIcon: 'ti-bar-chart'
          },
          {
            type: 'info',
            icon: 'ti-user',
            title: 'Members',
            value: '5',
            footerText: 'Management',
            footerIcon: 'ti-settings'
          }
        ],
        usersChart: {
          data: {
            labels: ['9:00AM', '12:00AM', '3:00PM', '6:00PM', '9:00PM', '12:00PM', '3:00AM', '6:00AM'],
            series: [
              [287, 385, 490, 562, 594, 626, 698, 895, 952],
              [67, 152, 193, 240, 387, 435, 535, 642, 744],
              [23, 113, 67, 108, 190, 239, 307, 410, 410]
            ]
          },
          options: {
            low: 0,
            high: 1000,
            showArea: true,
            height: '245px',
            axisX: {
              showGrid: false
            },
            lineSmooth: this.$Chartist.Interpolation.simple({
              divisor: 3
            }),
            showLine: true,
            showPoint: false
          }
        },
        activityChart: {
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            series: [
              [542, 543, 520, 680, 653, 753, 326, 434, 568, 610, 756, 895],
              [230, 293, 380, 480, 503, 553, 600, 664, 698, 710, 736, 795]
            ]
          },
          options: {
            seriesBarDistance: 10,
            axisX: {
              showGrid: false
            },
            height: '245px'
          }
        },
        preferencesChart: {
          data: {
            labels: ['62%', '32%', '6%'],
            series: [62, 32, 6]
          },
          options: {}
        }

      }
    }
  }

</script>
<style scoped>
  .icon-align {
    position: relative;
    display: inline-block;
    opacity: 100;
    text-align: center;
    margin-right: 5px;
    padding: 5px;
    border: 1px solid #EFEBE9;
  }
  .icon-align:hover {
    border-radius: 6px;
    border: 1px solid #EFEBE9;
    background-color: #D7CCC8;
    text-decoration:none;
  }
  .icon-size {
    font-size: 9pt;
  }
  .feed-content-title {
    margin-top: 20px;
    font-weight: bold;
    color: #3d3a36 !important;
  }
  .minute-info {
    margin-left: 5px;
    margin-right: 5px;
  }
  .edit-menu {
    position: absolute;
    width: 100%;
    text-align: right;
    padding: 10px;
  }
  .edit-menu i {
    padding: 5px;
    border: 1px solid #fff;
  }
  .edit-menu:hover i {
    border-radius: 6px;
    border: 1px solid #EFEBE9;
    background-color: #D7CCC8;
  }
  .card-feed-comment-avatar {
    margin: 10px;
    position: absolute;
    z-index: 0;
  }
  .card-feed-comment-avatar {
    margin: 10px;
    margin-top: 15px;
    position: absolute;
    border: 2px solid #EFEBE9;
    z-index: 0;
  }
  .width-feed-comment {
    margin-left: 50px;
    max-width: 82%;
  }
  .card-feed-comment-text {
    position: static;
    padding-left: 20px !important;
    z-index: 1;
  }
  .comment-author-name {
    font-weight: bold;
    color: #3d3a36;
  }
  .comment-text {
    color: #66615b;
  }
</style>

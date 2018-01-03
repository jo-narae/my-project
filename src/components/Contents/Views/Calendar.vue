<template>
  <div class="row">
    <div class="col-lg-2 col-md-3">
      <div class="card card-user">
        <div class="content">
          <div class="content-job-list">
            <a class="badge btn-job-add">Add</a>
            <div class="center-job-list">
              <span class="title-job-list"> JOB LIST </span>
            </div>
            <div class="margin-job-list" v-for="work in jobListData">
              <button type="submit" class="btn btn-sm ellipsis full-job-list"
                      draggable="true">
                {{work.text}}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-10 col-md-9">
      <div class="card">
        <div class="content">
          <div data-v-1755bbe3="" id="calendar" class="fc fc-unthemed fc-ltr">
            <div class="fc-toolbar fc-header-toolbar">
              <div class="fc-left">
                <div class="fc-button-group">
                  <button type="button" class="fc-prev-button fc-button fc-state-default fc-corner-left"><span
                    class="fc-icon fc-icon-left-single-arrow"></span></button>
                  <button type="button" class="fc-next-button fc-button fc-state-default fc-corner-right"><span
                    class="fc-icon fc-icon-right-single-arrow"></span></button>
                </div>
                <button type="button" class="fc-today-button fc-button fc-state-default fc-corner-left fc-corner-right">
                  today
                </button>
              </div>
              <div class="fc-right">
                <div class="fc-button-group">
                  <button type="button"
                          class="fc-month-button fc-button fc-state-default fc-corner-left fc-state-active">month
                  </button>
                  <button type="button" class="fc-agendaWeek-button fc-button fc-state-default">week</button>
                  <button type="button" class="fc-agendaDay-button fc-button fc-state-default">day</button>
                  <button type="button" class="fc-listWeek-button fc-button fc-state-default fc-corner-right">list
                  </button>
                </div>
              </div>
              <div class="fc-center"><h2>December 2017</h2></div>
              <div class="fc-clear"></div>
            </div>
            <div class="fc-view-container" style="">
              <div class="fc-view fc-month-view fc-basic-view" style="">
                <table class="">
                  <thead class="fc-head">
                  <tr>
                    <td class="fc-head-container fc-widget-header">
                      <div class="fc-row fc-widget-header">
                        <table class="">
                          <thead>
                          <tr>
                            <th class="fc-day-header fc-widget-header fc-sun"><span>Sun</span></th>
                            <th class="fc-day-header fc-widget-header fc-mon"><span>Mon</span></th>
                            <th class="fc-day-header fc-widget-header fc-tue"><span>Tue</span></th>
                            <th class="fc-day-header fc-widget-header fc-wed"><span>Wed</span></th>
                            <th class="fc-day-header fc-widget-header fc-thu"><span>Thu</span></th>
                            <th class="fc-day-header fc-widget-header fc-fri"><span>Fri</span></th>
                            <th class="fc-day-header fc-widget-header fc-sat"><span>Sat</span></th>
                          </tr>
                          </thead>
                        </table>
                      </div>
                    </td>
                  </tr>
                  </thead>
                  <tbody class="fc-body">
                  <tr>
                    <td class="fc-widget-content">
                      <div class="fc-scroller fc-day-grid-container" style="overflow: hidden; height: 531.438px;">
                        <div class="fc-day-grid fc-unselectable">
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 88px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-other-month fc-past"
                                      data-date="2017-11-26"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                      data-date="2017-11-27"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                      data-date="2017-11-28"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                      data-date="2017-11-29"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-other-month fc-past"
                                      data-date="2017-11-30"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-12-01"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-12-02"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-other-month fc-past" data-date="2017-11-26"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2017-11-26&quot;,&quot;type&quot;:&quot;day&quot;}">26</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-other-month fc-past" data-date="2017-11-27"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2017-11-27&quot;,&quot;type&quot;:&quot;day&quot;}">27</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-other-month fc-past" data-date="2017-11-28"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2017-11-28&quot;,&quot;type&quot;:&quot;day&quot;}">28</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-other-month fc-past" data-date="2017-11-29"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2017-11-29&quot;,&quot;type&quot;:&quot;day&quot;}">29</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-other-month fc-past" data-date="2017-11-30"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2017-11-30&quot;,&quot;type&quot;:&quot;day&quot;}">30</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-past" data-date="2017-12-01"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-01&quot;,&quot;type&quot;:&quot;day&quot;}">1</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-past" data-date="2017-12-02"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-02&quot;,&quot;type&quot;:&quot;day&quot;}">2</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable">
                                    <div class="fc-content"><span class="fc-title">All Day Event</span></div>
                                    <div class="fc-resizer fc-end-resizer"></div>
                                  </a></td>
                                  <td></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 88px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-12-03"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2017-12-04"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2017-12-05"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-12-06"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-12-07"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-12-08"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-12-09"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-past" data-date="2017-12-03"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-03&quot;,&quot;type&quot;:&quot;day&quot;}">3</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-past" data-date="2017-12-04"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-04&quot;,&quot;type&quot;:&quot;day&quot;}">4</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-past" data-date="2017-12-05"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-05&quot;,&quot;type&quot;:&quot;day&quot;}">5</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-past" data-date="2017-12-06"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-06&quot;,&quot;type&quot;:&quot;day&quot;}">6</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-past" data-date="2017-12-07"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-07&quot;,&quot;type&quot;:&quot;day&quot;}">7</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-past" data-date="2017-12-08"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-08&quot;,&quot;type&quot;:&quot;day&quot;}">8</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-past" data-date="2017-12-09"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-09&quot;,&quot;type&quot;:&quot;day&quot;}">9</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td rowspan="2"></td>
                                  <td rowspan="2"></td>
                                  <td rowspan="2"></td>
                                  <td rowspan="2"></td>
                                  <td class="fc-event-container" colspan="3"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable">
                                    <div class="fc-content"><span class="fc-title">Long Event</span></div>
                                    <div class="fc-resizer fc-end-resizer"></div>
                                  </a></td>
                                </tr>
                                <tr style="">
                                  <td></td>
                                  <td></td>
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">4p</span> <span class="fc-title">Repeating Event</span>
                                    </div>
                                  </a></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 88px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-12-10"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2017-12-11"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2017-12-12"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-12-13"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-12-14"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-12-15"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-12-16"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-past" data-date="2017-12-10"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-10&quot;,&quot;type&quot;:&quot;day&quot;}">10</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-past" data-date="2017-12-11"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-11&quot;,&quot;type&quot;:&quot;day&quot;}">11</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-past" data-date="2017-12-12"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-12&quot;,&quot;type&quot;:&quot;day&quot;}">12</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-past" data-date="2017-12-13"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-13&quot;,&quot;type&quot;:&quot;day&quot;}">13</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-past" data-date="2017-12-14"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-14&quot;,&quot;type&quot;:&quot;day&quot;}">14</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-past" data-date="2017-12-15"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-15&quot;,&quot;type&quot;:&quot;day&quot;}">15</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-past" data-date="2017-12-16"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-16&quot;,&quot;type&quot;:&quot;day&quot;}">16</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td rowspan="6"></td>
                                  <td class="fc-event-container" colspan="2"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable">
                                    <div class="fc-content"><span class="fc-title">Conference</span></div>
                                    <div class="fc-resizer fc-end-resizer"></div>
                                  </a></td>
                                  <td class="fc-event-container" rowspan="6"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">7a</span> <span class="fc-title">Birthday Party</span>
                                    </div>
                                  </a></td>
                                  <td rowspan="6"></td>
                                  <td rowspan="6"></td>
                                  <td class="fc-event-container" rowspan="6"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">4p</span> <span class="fc-title">Repeating Event</span>
                                    </div>
                                  </a></td>
                                </tr>
                                <tr style="">
                                  <td rowspan="5"></td>
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">10:30a</span> <span class="fc-title">Meeting</span>
                                    </div>
                                  </a></td>
                                </tr>
                                <tr style="">
                                  <td class="fc-event-container fc-limited"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">12p</span> <span class="fc-title">Lunch</span>
                                    </div>
                                  </a></td>
                                  <td class="fc-more-cell" rowspan="1">
                                    <div><a class="fc-more">+4 more</a></div>
                                  </td>
                                </tr>
                                <tr style="" class="fc-limited">
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">2:30p</span> <span class="fc-title">Meeting</span>
                                    </div>
                                  </a></td>
                                </tr>
                                <tr class="fc-limited">
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">5:30p</span> <span class="fc-title">Happy Hour</span>
                                    </div>
                                  </a></td>
                                </tr>
                                <tr class="fc-limited">
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable">
                                    <div class="fc-content"><span class="fc-time">8p</span> <span class="fc-title">Dinner</span>
                                    </div>
                                  </a></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 88px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-12-17"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2017-12-18"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2017-12-19"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-12-20"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-12-21"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-12-22"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-12-23"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-past" data-date="2017-12-17"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-17&quot;,&quot;type&quot;:&quot;day&quot;}">17</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-past" data-date="2017-12-18"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-18&quot;,&quot;type&quot;:&quot;day&quot;}">18</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-past" data-date="2017-12-19"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-19&quot;,&quot;type&quot;:&quot;day&quot;}">19</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-past" data-date="2017-12-20"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-20&quot;,&quot;type&quot;:&quot;day&quot;}">20</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-past" data-date="2017-12-21"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-21&quot;,&quot;type&quot;:&quot;day&quot;}">21</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-past" data-date="2017-12-22"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-22&quot;,&quot;type&quot;:&quot;day&quot;}">22</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-past" data-date="2017-12-23"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-23&quot;,&quot;type&quot;:&quot;day&quot;}">23</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 88px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-12-24"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-past" data-date="2017-12-25"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-past" data-date="2017-12-26"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-past" data-date="2017-12-27"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-past" data-date="2017-12-28"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-past" data-date="2017-12-29"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-past" data-date="2017-12-30"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-past" data-date="2017-12-24"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-24&quot;,&quot;type&quot;:&quot;day&quot;}">24</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-past" data-date="2017-12-25"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-25&quot;,&quot;type&quot;:&quot;day&quot;}">25</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-past" data-date="2017-12-26"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-26&quot;,&quot;type&quot;:&quot;day&quot;}">26</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-past" data-date="2017-12-27"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-27&quot;,&quot;type&quot;:&quot;day&quot;}">27</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-past" data-date="2017-12-28"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-28&quot;,&quot;type&quot;:&quot;day&quot;}">28</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-past" data-date="2017-12-29"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-29&quot;,&quot;type&quot;:&quot;day&quot;}">29</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-past" data-date="2017-12-30"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-30&quot;,&quot;type&quot;:&quot;day&quot;}">30</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td class="fc-event-container"><a
                                    class="fc-day-grid-event fc-h-event fc-event fc-start fc-end fc-draggable fc-resizable"
                                    href="http://google.com/">
                                    <div class="fc-content"><span class="fc-title">Click for Google</span></div>
                                    <div class="fc-resizer fc-end-resizer"></div>
                                  </a></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                          <div class="fc-row fc-week fc-widget-content fc-rigid" style="height: 91px;">
                            <div class="fc-bg">
                              <table class="">
                                <tbody>
                                <tr>
                                  <td class="fc-day fc-widget-content fc-sun fc-past" data-date="2017-12-31"></td>
                                  <td class="fc-day fc-widget-content fc-mon fc-other-month fc-past"
                                      data-date="2018-01-01"></td>
                                  <td class="fc-day fc-widget-content fc-tue fc-other-month fc-past"
                                      data-date="2018-01-02"></td>
                                  <td class="fc-day fc-widget-content fc-wed fc-other-month fc-past"
                                      data-date="2018-01-03"></td>
                                  <td class="fc-day fc-widget-content fc-thu fc-other-month fc-today "
                                      data-date="2018-01-04"></td>
                                  <td class="fc-day fc-widget-content fc-fri fc-other-month fc-future"
                                      data-date="2018-01-05"></td>
                                  <td class="fc-day fc-widget-content fc-sat fc-other-month fc-future"
                                      data-date="2018-01-06"></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                            <div class="fc-content-skeleton">
                              <table>
                                <thead>
                                <tr>
                                  <td class="fc-day-top fc-sun fc-past" data-date="2017-12-31"><a class="fc-day-number"
                                                                                                  data-goto="{&quot;date&quot;:&quot;2017-12-31&quot;,&quot;type&quot;:&quot;day&quot;}">31</a>
                                  </td>
                                  <td class="fc-day-top fc-mon fc-other-month fc-past" data-date="2018-01-01"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-01&quot;,&quot;type&quot;:&quot;day&quot;}">1</a>
                                  </td>
                                  <td class="fc-day-top fc-tue fc-other-month fc-past" data-date="2018-01-02"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-02&quot;,&quot;type&quot;:&quot;day&quot;}">2</a>
                                  </td>
                                  <td class="fc-day-top fc-wed fc-other-month fc-past" data-date="2018-01-03"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-03&quot;,&quot;type&quot;:&quot;day&quot;}">3</a>
                                  </td>
                                  <td class="fc-day-top fc-thu fc-other-month fc-today " data-date="2018-01-04"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-04&quot;,&quot;type&quot;:&quot;day&quot;}">4</a>
                                  </td>
                                  <td class="fc-day-top fc-fri fc-other-month fc-future" data-date="2018-01-05"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-05&quot;,&quot;type&quot;:&quot;day&quot;}">5</a>
                                  </td>
                                  <td class="fc-day-top fc-sat fc-other-month fc-future" data-date="2018-01-06"><a
                                    class="fc-day-number"
                                    data-goto="{&quot;date&quot;:&quot;2018-01-06&quot;,&quot;type&quot;:&quot;day&quot;}">6</a>
                                  </td>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="">
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                  <td></td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        jobListData: [
          {text: 'design'},
          {text: 'implement'},
          {text: 'test'},
          {text: 'job event management'},
          {text: 'job event management job event managementjob event managementjob event managementjob event managementjob event managementjob event management'}
        ],
        jobEvents: [
          {
            id: 1,
            title: 'All Day Event',
            start: '2017-12-01',
            end: '2017-12-01'
          },
          {
            id: 2,
            title: 'Long Event',
            start: '2017-12-07',
            end: '2017-12-10'
          },
          {
            id: 3,
            title: 'Repeating Event',
            start: '2017-12-09T16:00:00'
          }
        ],
        events: []
      }
    },
    mounted: function () {
      this.initCalendar()
    },
    methods: {
      initCalendar () {
      }
    }
  }

</script>
<style scoped>
.center-job-list {
    text-align: center !important;
  }
  .full-job-list {
    min-width: 100%;
  }
  .ellipsis {
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .title-job-list {
    font-weight: bold;
    margin-bottom: 15px;
  }
  .margin-job-list {
    margin: 10px 0px 10px;
  }
  .btn-job-add {
    position: absolute;
    font-size: 10px;
    margin-left: 65%;
  }
</style>

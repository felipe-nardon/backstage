"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[1611],{"../plugins/microsoft-calendar/src/components/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MicrosoftCalendar:()=>MicrosoftCalendar});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),queryClient=__webpack_require__("../node_modules/@tanstack/query-core/build/lib/queryClient.mjs"),QueryClientProvider=__webpack_require__("../node_modules/@tanstack/react-query/build/lib/QueryClientProvider.mjs"),lodash=__webpack_require__("../node_modules/lodash/lodash.js"),luxon=__webpack_require__("../node_modules/luxon/src/luxon.js"),InfoCard=__webpack_require__("../packages/core-components/src/layout/InfoCard/InfoCard.tsx"),Progress=__webpack_require__("../packages/core-components/src/components/Progress/Progress.tsx"),Box=__webpack_require__("../node_modules/@material-ui/core/esm/Box/Box.js"),IconButton=__webpack_require__("../node_modules/@material-ui/core/esm/IconButton/IconButton.js"),Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),NavigateBefore=__webpack_require__("../node_modules/@material-ui/icons/NavigateBefore.js"),NavigateNext=__webpack_require__("../node_modules/@material-ui/icons/NavigateNext.js"),useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),auth=__webpack_require__("../packages/core-plugin-api/src/apis/definitions/auth.ts");var useQuery=__webpack_require__("../node_modules/@tanstack/react-query/build/lib/useQuery.mjs"),ErrorApi=__webpack_require__("../packages/core-plugin-api/src/apis/definitions/ErrorApi.ts"),client=__webpack_require__("../plugins/microsoft-calendar/src/api/client.ts");const calendar_namespaceObject=__webpack_require__.p+"static/media/calendar.f6f89c92.svg";var classnames=__webpack_require__("../node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),hooks=__webpack_require__("../node_modules/material-ui-popup-state/hooks.js"),Link=__webpack_require__("../packages/core-components/src/components/Link/Link.tsx"),makeStyles=__webpack_require__("../node_modules/@material-ui/core/esm/styles/makeStyles.js"),Paper=__webpack_require__("../node_modules/@material-ui/core/esm/Paper/Paper.js"),Tooltip=__webpack_require__("../node_modules/@material-ui/core/esm/Tooltip/Tooltip.js"),Popover=__webpack_require__("../node_modules/@material-ui/core/esm/Popover/Popover.js");const webcam_namespaceObject=__webpack_require__.p+"static/media/webcam.01a70792.svg";var purify=__webpack_require__("../node_modules/dompurify/dist/purify.js"),purify_default=__webpack_require__.n(purify),Divider=__webpack_require__("../node_modules/@material-ui/core/esm/Divider/Divider.js"),ArrowForward=__webpack_require__("../node_modules/@material-ui/icons/ArrowForward.js"),Badge=__webpack_require__("../node_modules/@material-ui/core/esm/Badge/Badge.js"),Chip=__webpack_require__("../node_modules/@material-ui/core/esm/Chip/Chip.js"),Cancel=__webpack_require__("../node_modules/@material-ui/icons/Cancel.js"),CheckCircle=__webpack_require__("../node_modules/@material-ui/icons/CheckCircle.js");const ResponseStatusMap_accepted="accepted",ResponseStatusMap_declined="declined",useStyles=(0,makeStyles.A)((theme=>({responseStatus:{color:({responseStatus})=>(responseStatus=>responseStatus?{[ResponseStatusMap_accepted]:theme.palette.status.ok,[ResponseStatusMap_declined]:theme.palette.status.error}[responseStatus]:theme.palette.primary.light)(responseStatus)},badge:{right:10,top:5,"& svg":{height:16,width:16,background:theme.palette.common.white}}}))),ResponseIcon=({responseStatus})=>responseStatus===ResponseStatusMap_accepted?(0,jsx_runtime.jsx)(CheckCircle.A,{"data-testid":"accepted-icon"}):responseStatus===ResponseStatusMap_declined?(0,jsx_runtime.jsx)(Cancel.A,{"data-testid":"declined-icon"}):null,AttendeeChip=({user})=>{var _user_status,_user_status1,_user_emailAddress;const classes=useStyles({responseStatus:(null===(_user_status=user.status)||void 0===_user_status?void 0:_user_status.response)||""});return(0,jsx_runtime.jsx)(Badge.A,{classes:{root:classes.responseStatus,badge:classes.badge},badgeContent:(0,jsx_runtime.jsx)(ResponseIcon,{responseStatus:(null===(_user_status1=user.status)||void 0===_user_status1?void 0:_user_status1.response)||""}),children:(0,jsx_runtime.jsx)(Chip.A,{size:"small",variant:"outlined",label:null===(_user_emailAddress=user.emailAddress)||void 0===_user_emailAddress?void 0:_user_emailAddress.address,color:"primary"})})};try{AttendeeChip.displayName="AttendeeChip",AttendeeChip.__docgenInfo={description:"",displayName:"AttendeeChip",props:{user:{defaultValue:null,description:"",name:"user",required:!0,type:{name:"Attendee"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/microsoft-calendar/src/components/AttendeeChip.tsx#AttendeeChip"]={docgenInfo:AttendeeChip.__docgenInfo,name:"AttendeeChip",path:"../plugins/microsoft-calendar/src/components/AttendeeChip.tsx#AttendeeChip"})}catch(__react_docgen_typescript_loader_error){}function getOnlineMeetingLink(event){var _event_onlineMeeting;const onlineEntrypoint=(null===(_event_onlineMeeting=event.onlineMeeting)||void 0===_event_onlineMeeting?void 0:_event_onlineMeeting.joinUrl)||event.onlineMeetingUrl;return onlineEntrypoint||""}function getTimePeriod(event){var _event_start,_event_end;if(isAllDay(event))return function getAllDayTimePeriod(event){var _event_start,_event_end;const format={month:"long",day:"numeric"},startTime=luxon.c9.fromISO((null===(_event_start=event.start)||void 0===_event_start?void 0:_event_start.dateTime)||""),endTime=luxon.c9.fromISO((null===(_event_end=event.end)||void 0===_event_end?void 0:_event_end.dateTime)||"").minus({day:1});if(startTime.toISO()===endTime.toISO())return startTime.toLocaleString(format);return`${startTime.toLocaleString(format)} - ${endTime.toLocaleString(format)}`}(event);const format={hour:"2-digit",minute:"2-digit"},startTime=luxon.c9.fromISO((null===(_event_start=event.start)||void 0===_event_start?void 0:_event_start.dateTime)||""),endTime=luxon.c9.fromISO((null===(_event_end=event.end)||void 0===_event_end?void 0:_event_end.dateTime)||"");return`${startTime.toLocaleString(format)} - ${endTime.toLocaleString(format)}`}function isPassed(event){var _event_end,_event_end1;if(!(null===(_event_end=event.end)||void 0===_event_end?void 0:_event_end.dateTime))return!1;const eventDate=luxon.c9.fromISO(null===(_event_end1=event.end)||void 0===_event_end1?void 0:_event_end1.dateTime);return luxon.c9.now()>=eventDate}function isAllDay(event){var _event_start,_event_end;const startTime=luxon.c9.fromISO((null===(_event_start=event.start)||void 0===_event_start?void 0:_event_start.dateTime)||"");return luxon.c9.fromISO((null===(_event_end=event.end)||void 0===_event_end?void 0:_event_end.dateTime)||"").diff(startTime,"day").days>=1}function getStartDate(event){var _event_start;return luxon.c9.fromISO((null===(_event_start=event.start)||void 0===_event_start?void 0:_event_start.dateTime)||"")}const CalendarEventPopoverContent_useStyles=(0,makeStyles.A)((theme=>({description:{wordBreak:"break-word","& a":{color:theme.palette.primary.main,fontWeight:500}},divider:{marginTop:theme.spacing(2),marginBottom:theme.spacing(2)}})),{name:"MicrosoftCalendarEventPopoverContent"}),CalendarEventPopoverContent=({event})=>{const classes=CalendarEventPopoverContent_useStyles(),onlineMeetingLink=getOnlineMeetingLink(event);return(0,jsx_runtime.jsxs)(Box.A,{display:"flex",flexDirection:"column",width:400,p:2,children:[(0,jsx_runtime.jsxs)(Box.A,{display:"flex",alignItems:"center",children:[(0,jsx_runtime.jsxs)(Box.A,{flex:1,children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"h6",children:event.subject}),(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle2",children:getTimePeriod(event)})]}),event.webLink&&(0,jsx_runtime.jsx)(Tooltip.Ay,{title:"Open in Calendar",children:(0,jsx_runtime.jsx)(Link.N_,{"data-testid":"open-calendar-link",to:event.webLink,onClick:_e=>{},noTrack:!0,children:(0,jsx_runtime.jsx)(IconButton.A,{children:(0,jsx_runtime.jsx)(ArrowForward.A,{})})})})]}),onlineMeetingLink&&(0,jsx_runtime.jsx)(Link.N_,{to:onlineMeetingLink,onClick:_e=>{},noTrack:!0,children:"Join Online Meeting"}),event.bodyPreview&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Divider.A,{className:classes.divider,variant:"fullWidth"}),(0,jsx_runtime.jsx)(Box.A,{className:classes.description,dangerouslySetInnerHTML:{__html:purify_default().sanitize(event.body&&event.body.content||"",{USE_PROFILES:{html:!0}})}})]}),event.attendees&&(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Divider.A,{className:classes.divider,variant:"fullWidth"}),(0,jsx_runtime.jsxs)(Box.A,{children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle2",children:"Attendees"}),(0,jsx_runtime.jsx)(Box.A,{mb:1}),(0,lodash.sortBy)(event.attendees||[],"emailAddress").map((user=>{var _user_emailAddress;return(0,jsx_runtime.jsx)(AttendeeChip,{user},(null===(_user_emailAddress=user.emailAddress)||void 0===_user_emailAddress?void 0:_user_emailAddress.address)||"")}))]})]})]})};try{CalendarEventPopoverContent.displayName="CalendarEventPopoverContent",CalendarEventPopoverContent.__docgenInfo={description:"",displayName:"CalendarEventPopoverContent",props:{event:{defaultValue:null,description:"",name:"event",required:!0,type:{name:"Event"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/microsoft-calendar/src/components/CalendarEventPopoverContent.tsx#CalendarEventPopoverContent"]={docgenInfo:CalendarEventPopoverContent.__docgenInfo,name:"CalendarEventPopoverContent",path:"../plugins/microsoft-calendar/src/components/CalendarEventPopoverContent.tsx#CalendarEventPopoverContent"})}catch(__react_docgen_typescript_loader_error){}const CalendarEvent_useStyles=(0,makeStyles.A)((theme=>({event:{display:"flex",alignItems:"center",marginBottom:theme.spacing(1),cursor:"pointer",paddingRight:12},declined:{textDecoration:"line-through"},passed:{opacity:.6,transition:"opacity 0.15s ease-in-out","&:hover":{opacity:1}},link:{width:48,height:48,display:"inline-block",padding:8,borderRadius:"50%","&:hover":{backgroundColor:theme.palette.grey[100]}},calendarColor:{width:8,borderTopLeftRadius:4,borderBottomLeftRadius:4}})),{name:"MicrosoftCalendarEvent"}),CalendarEvent=({event})=>{const classes=CalendarEvent_useStyles(),popoverState=(0,hooks.T6)({variant:"popover",popupId:event.id,disableAutoFocus:!0}),[hovered,setHovered]=(0,react.useState)(!1),onlineMeetingLink=getOnlineMeetingLink(event),{onClick,...restBindProps}=(0,hooks.cO)(popoverState);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsxs)(Paper.A,{onClick:e=>{onClick(e)},...restBindProps,onMouseEnter:()=>setHovered(!0),onMouseLeave:()=>setHovered(!1),elevation:hovered?4:1,className:classnames_default()(classes.event,{[classes.passed]:isPassed(event)}),"data-testid":"microsoft-calendar-event",children:[(0,jsx_runtime.jsx)(Box.A,{className:classes.calendarColor,mr:1,alignSelf:"stretch"}),(0,jsx_runtime.jsxs)(Box.A,{flex:1,pt:1,pb:1,children:[(0,jsx_runtime.jsx)(Typography.A,{variant:"subtitle2",className:classnames_default()({[classes.declined]:event.isCancelled}),children:event.subject}),!isAllDay(event)&&(0,jsx_runtime.jsx)(Typography.A,{variant:"body2","data-testid":"calendar-event-time",children:getTimePeriod(event)})]}),event.isOnlineMeeting&&(0,jsx_runtime.jsx)(Tooltip.Ay,{title:"Join Online Meeting",children:(0,jsx_runtime.jsx)(Link.N_,{"data-testid":"calendar-event-online-meeting-link",className:classes.link,to:onlineMeetingLink,onClick:e=>{e.stopPropagation()},noTrack:!0,children:(0,jsx_runtime.jsx)("img",{height:32,width:32,src:webcam_namespaceObject,alt:"Online Meeting link"})})})]}),(0,jsx_runtime.jsx)(Popover.Ay,{...(0,hooks.dB)(popoverState),anchorOrigin:{vertical:"top",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"},"data-testid":"calendar-event-popover",children:(0,jsx_runtime.jsx)(CalendarEventPopoverContent,{event})})]})};try{CalendarEvent.displayName="CalendarEvent",CalendarEvent.__docgenInfo={description:"",displayName:"CalendarEvent",props:{event:{defaultValue:null,description:"",name:"event",required:!0,type:{name:"Event"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/microsoft-calendar/src/components/CalendarEvent.tsx#CalendarEvent"]={docgenInfo:CalendarEvent.__docgenInfo,name:"CalendarEvent",path:"../plugins/microsoft-calendar/src/components/CalendarEvent.tsx#CalendarEvent"})}catch(__react_docgen_typescript_loader_error){}var FormControl=__webpack_require__("../node_modules/@material-ui/core/esm/FormControl/FormControl.js"),Select=__webpack_require__("../node_modules/@material-ui/core/esm/Select/Select.js"),Input=__webpack_require__("../node_modules/@material-ui/core/esm/Input/Input.js"),MenuItem=__webpack_require__("../node_modules/@material-ui/core/esm/MenuItem/MenuItem.js"),Checkbox=__webpack_require__("../node_modules/@material-ui/core/esm/Checkbox/Checkbox.js"),ListItemText=__webpack_require__("../node_modules/@material-ui/core/esm/ListItemText/ListItemText.js");const CalendarSelect_useStyles=(0,makeStyles.A)({formControl:{width:120},selectedCalendars:{textOverflow:"ellipsis",overflow:"hidden"}},{name:"MicrosoftCalendarSelect"}),CalendarSelect=({disabled,selectedCalendarId,setSelectedCalendarId,calendars})=>{const classes=CalendarSelect_useStyles();return(0,jsx_runtime.jsx)(FormControl.A,{className:classes.formControl,children:(0,jsx_runtime.jsx)(Select.A,{labelId:"calendars-label",disabled:disabled||0===calendars.length,value:selectedCalendarId||"",onChange:async e=>setSelectedCalendarId(e.target.value),input:(0,jsx_runtime.jsx)(Input.A,{}),renderValue:selected=>{var _calendars_find;return(0,jsx_runtime.jsx)(Typography.A,{className:classes.selectedCalendars,variant:"body2",children:null===(_calendars_find=calendars.find((c=>c.id===selected)))||void 0===_calendars_find?void 0:_calendars_find.name})},MenuProps:{PaperProps:{style:{width:350}}},children:(0,lodash.sortBy)(calendars,"name").map((c=>(0,jsx_runtime.jsxs)(MenuItem.A,{value:c.id,children:[(0,jsx_runtime.jsx)(Checkbox.A,{checked:c.id===selectedCalendarId}),(0,jsx_runtime.jsx)(ListItemText.A,{primary:c.name})]},c.id)))})})};try{CalendarSelect.displayName="CalendarSelect",CalendarSelect.__docgenInfo={description:"",displayName:"CalendarSelect",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!0,type:{name:"boolean"}},selectedCalendarId:{defaultValue:null,description:"",name:"selectedCalendarId",required:!1,type:{name:"string"}},setSelectedCalendarId:{defaultValue:null,description:"",name:"setSelectedCalendarId",required:!0,type:{name:"(value: string) => void"}},calendars:{defaultValue:null,description:"",name:"calendars",required:!0,type:{name:"Calendar[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/microsoft-calendar/src/components/CalendarSelect.tsx#CalendarSelect"]={docgenInfo:CalendarSelect.__docgenInfo,name:"CalendarSelect",path:"../plugins/microsoft-calendar/src/components/CalendarSelect.tsx#CalendarSelect"})}catch(__react_docgen_typescript_loader_error){}var styled=__webpack_require__("../node_modules/@material-ui/core/esm/styles/styled.js"),Button=__webpack_require__("../node_modules/@material-ui/core/esm/Button/Button.js");const eventMock_namespaceObject=JSON.parse('[{"id":"AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MAFRAAgI2vdUnGxAAEYAAAAABZfL1rFDfUO0G4cMgXCC1gcApFI7gxQldkOLWHDOlgt60AAAAAABDQAApFI7gxQldkOLWHDOlgt60AAAYl_I0AAAEA==","createdDateTime":"2022-12-22T08:28:36.6131501Z","lastModifiedDateTime":"2023-01-20T05:24:31.9666518Z","changeKey":"pFI7gxQldkOLWHDOlgt60AAAd5KhaA==","categories":[],"transactionId":null,"originalStartTimeZone":"India Standard Time","originalEndTimeZone":"India Standard Time","iCalUId":"040000008200E00074C5B7101A82E00807E7011006D3A5A92DC7D80100000000000000001000000002BB709705E28C4493E46124FF07DD89","reminderMinutesBeforeStart":15,"isReminderOn":true,"hasAttachments":false,"subject":"Abhay Soni","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":"AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MABGAAAAAAAFl8vWsUN9Q7QbhwyBcILWBwCkUjuDFCV2Q4tYcM6WC3rQAAAAAAENAACkUjuDFCV2Q4tYcM6WC3rQAABiX4jQAAA=","showAs":"tentative","type":"occurrence","webLink":"","onlineMeetingUrl":"","isOnlineMeeting":true,"onlineMeetingProvider":"teamsForBusiness","allowNewTimeProposals":true,"occurrenceId":"OID.AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MABGAAAAAAAFl8vWsUN9Q7QbhwyBcILWBwCkUjuDFCV2Q4tYcM6WC3rQAAAAAAENAACkUjuDFCV2Q4tYcM6WC3rQAABiX4jQAAA=.2023-01-16","isDraft":false,"hideAttendees":false,"responseStatus":{"response":"notResponded","time":"0001-01-01T00:00:00Z"},"body":{"contentType":"html","content":""},"start":{"dateTime":"2023-01-16T11:00:00.0000000","timeZone":"Asia/Calcutta"},"end":{"dateTime":"2023-01-16T11:30:00.0000000","timeZone":"Asia/Calcutta"},"location":{"displayName":"","locationType":"default","uniqueIdType":"unknown","address":{},"coordinates":{}},"locations":[],"recurrence":null,"attendees":[],"organizer":{"emailAddress":{"name":"Abhay Soni","address":"abhaysoni.developer@gmail.com"}},"onlineMeeting":{"joinUrl":"https://abhay-soni-developer.github.io/MyReusme/"}},{"id":"AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MAFRAAgI2vdUnGxAAEYAAAAABZfL1rFDfUO0G4cMgXCC1gcApFI7gxQldkOLWHDOlgt60AAAAAABDQAApFI7gxQldkOLWHDOlgt60AAAYl_I0AAAEA==","createdDateTime":"2022-12-22T08:28:36.6131501Z","lastModifiedDateTime":"2023-01-20T05:24:31.9666518Z","changeKey":"pFI7gxQldkOLWHDOlgt60AAAd5KhaA==","categories":[],"transactionId":null,"originalStartTimeZone":"India Standard Time","originalEndTimeZone":"India Standard Time","iCalUId":"040000008200E00074C5B7101A82E00807E7011006D3A5A92DC7D80100000000000000001000000002BB709705E28C4493E46124FF07DD89","reminderMinutesBeforeStart":15,"isReminderOn":true,"hasAttachments":false,"subject":"https://abhay-soni-developer.github.io/MyReusme/","bodyPreview":"","importance":"normal","sensitivity":"normal","isAllDay":false,"isCancelled":false,"isOrganizer":false,"responseRequested":true,"seriesMasterId":"AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MABGAAAAAAAFl8vWsUN9Q7QbhwyBcILWBwCkUjuDFCV2Q4tYcM6WC3rQAAAAAAENAACkUjuDFCV2Q4tYcM6WC3rQAABiX4jQAAA=","showAs":"tentative","type":"occurrence","webLink":"","onlineMeetingUrl":"","isOnlineMeeting":true,"onlineMeetingProvider":"teamsForBusiness","allowNewTimeProposals":true,"occurrenceId":"OID.AAMkADQyMDdlODU1LTk4Y2ItNGFmYi04YzYyLWQ4NmEzMmRhZTY5MABGAAAAAAAFl8vWsUN9Q7QbhwyBcILWBwCkUjuDFCV2Q4tYcM6WC3rQAAAAAAENAACkUjuDFCV2Q4tYcM6WC3rQAABiX4jQAAA=.2023-01-16","isDraft":false,"hideAttendees":false,"responseStatus":{"response":"notResponded","time":"0001-01-01T00:00:00Z"},"body":{"contentType":"html","content":""},"start":{"dateTime":"2023-01-16T11:00:00.0000000","timeZone":"Asia/Calcutta"},"end":{"dateTime":"2023-01-16T11:30:00.0000000","timeZone":"Asia/Calcutta"},"location":{"displayName":"","locationType":"default","uniqueIdType":"unknown","address":{},"coordinates":{}},"locations":[],"recurrence":null,"attendees":[],"organizer":{"emailAddress":{"name":"Abhay Soni","address":"abhaysoni.developer@gmail.com"}},"onlineMeeting":{"joinUrl":"https://abhay-soni-developer.github.io/MyReusme/"}}]'),TransparentBox=(0,styled.A)(Box.A)({opacity:.3,filter:"blur(1.5px)"}),SignInContent=({handleAuthClick})=>(0,jsx_runtime.jsxs)(Box.A,{position:"relative",height:"100%",width:"100%",children:[(0,jsx_runtime.jsx)(TransparentBox,{p:1,children:eventMock_namespaceObject.map((event=>(0,jsx_runtime.jsx)(CalendarEvent,{event},event.id)))}),(0,jsx_runtime.jsx)(Box.A,{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",position:"absolute",left:0,top:0,children:(0,jsx_runtime.jsx)(Button.A,{variant:"contained",color:"primary",onClick:handleAuthClick,size:"large",children:"Sign in"})})]});try{SignInContent.displayName="SignInContent",SignInContent.__docgenInfo={description:"",displayName:"SignInContent",props:{handleAuthClick:{defaultValue:null,description:"",name:"handleAuthClick",required:!0,type:{name:"React.MouseEventHandler<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/microsoft-calendar/src/components/SignInContent.tsx#SignInContent"]={docgenInfo:SignInContent.__docgenInfo,name:"SignInContent",path:"../plugins/microsoft-calendar/src/components/SignInContent.tsx#SignInContent"})}catch(__react_docgen_typescript_loader_error){}var useAsync=__webpack_require__("../node_modules/react-use/lib/useAsync.js");const CalendarCard=()=>{var _calendars_find;const[date,setDate]=(0,react.useState)(luxon.c9.now()),[selectedCalendarId,setSelectedCalendarId]=(0,react.useState)(""),changeDay=(offset=1)=>{setDate((prev=>prev.plus({day:offset})))},{isSignedIn,isInitialized,signIn}=(()=>{const[isSignedIn,setSignedIn]=(0,react.useState)(!1),[isInitialized,setInitialized]=(0,react.useState)(!1),authApi=(0,useApi.gf)(auth.u0);return{isSignedIn,isInitialized,signIn:(0,react.useCallback)((async(optional=!1)=>{const token=await authApi.getAccessToken("Calendars.Read",{optional,instantPopup:!optional});setSignedIn(!!token),setInitialized(!0)}),[authApi,setSignedIn])}})();(0,useAsync.A)((async()=>signIn(!0)),[signIn]);const{isLoading:isCalendarLoading,isFetching:isCalendarFetching,data:calendars=[]}=(({enabled})=>{const calendarApi=(0,useApi.gf)(client.k),errorApi=(0,useApi.gf)(ErrorApi.m);return(0,useQuery.I)(["calendars-list"],(async()=>{const calendars=[],value=await calendarApi.getCalendars();return calendars.push(...value),calendars}),{enabled,staleTime:18e4,refetchInterval:36e5,onError:()=>{errorApi.post({name:"API error",message:"Failed to fetch calendars."})}})})({enabled:isSignedIn}),defaultCalendarId=null===(_calendars_find=calendars.find((c=>c.isDefaultCalendar)))||void 0===_calendars_find?void 0:_calendars_find.id;var _date_zoneName;const{data:events,isLoading:isEventLoading}=(({calendarId,enabled,timeMin,timeMax,timeZone})=>{const calendarApi=(0,useApi.gf)(client.k);return(0,useQuery.I)(["calendarEvents",calendarId,timeMin,timeMax,timeZone],(async()=>await calendarApi.getEvents(calendarId,{startDateTime:timeMin,endDateTime:timeMax},{Prefer:`outlook.timezone="${timeZone}"`})),{cacheTime:3e5,enabled,refetchInterval:6e4,refetchIntervalInBackground:!0})})({calendarId:selectedCalendarId||defaultCalendarId||"",enabled:isSignedIn&&calendars.length>0,timeMin:date.startOf("day").toISO(),timeMax:date.endOf("day").toISO(),timeZone:null!==(_date_zoneName=date.zoneName)&&void 0!==_date_zoneName?_date_zoneName:void 0}),showLoader=isCalendarLoading&&isCalendarFetching||isEventLoading||!isInitialized;return(0,jsx_runtime.jsx)(InfoCard.n,{noPadding:!0,title:(0,jsx_runtime.jsxs)(Box.A,{display:"flex",alignItems:"center",children:[(0,jsx_runtime.jsx)(Box.A,{height:32,width:32,mr:1,children:(0,jsx_runtime.jsx)("img",{src:calendar_namespaceObject,alt:"Microsoft Calendar"})}),isSignedIn?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(IconButton.A,{onClick:()=>changeDay(-1),size:"small",children:(0,jsx_runtime.jsx)(NavigateBefore.A,{})}),(0,jsx_runtime.jsx)(IconButton.A,{onClick:()=>changeDay(1),size:"small",children:(0,jsx_runtime.jsx)(NavigateNext.A,{})}),(0,jsx_runtime.jsx)(Box.A,{mr:.5}),(0,jsx_runtime.jsx)(Typography.A,{variant:"h6",children:date.toLocaleString({weekday:"short",month:"short",day:"numeric"})}),(0,jsx_runtime.jsx)(Box.A,{flex:1}),(0,jsx_runtime.jsx)(CalendarSelect,{calendars,selectedCalendarId:selectedCalendarId||defaultCalendarId,setSelectedCalendarId,disabled:isCalendarFetching&&isCalendarLoading||!isSignedIn})]}):(0,jsx_runtime.jsx)(Typography.A,{variant:"h6",children:"Agenda"})]}),deepLink:{link:"https://outlook.office.com/calendar/",title:"Go to Calendar"},children:(0,jsx_runtime.jsxs)(Box.A,{children:[showLoader&&(0,jsx_runtime.jsx)(Box.A,{py:2,children:(0,jsx_runtime.jsx)(Progress.k,{variant:"query"})}),!isSignedIn&&isInitialized&&(0,jsx_runtime.jsx)(SignInContent,{handleAuthClick:()=>signIn(!1)}),!isEventLoading&&!isCalendarLoading&&isSignedIn&&(0,jsx_runtime.jsxs)(Box.A,{p:1,pb:0,maxHeight:602,overflow:"auto",children:[0===(null==events?void 0:events.length)&&(0,jsx_runtime.jsx)(Box.A,{pt:2,pb:2,children:(0,jsx_runtime.jsx)(Typography.A,{align:"center",variant:"h6",children:"No events"})}),(0,lodash.sortBy)(events,[getStartDate]).map((event=>(0,jsx_runtime.jsx)(CalendarEvent,{event},`${event.id}`)))]})]})})},MicrosoftCalendar_queryClient=new queryClient.E,MicrosoftCalendar=()=>(0,jsx_runtime.jsx)(QueryClientProvider.Ht,{client:MicrosoftCalendar_queryClient,children:(0,jsx_runtime.jsx)(CalendarCard,{})})}}]);
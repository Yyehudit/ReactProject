import { makeObservable, observable, action } from 'mobx'


class MeetingStore{

    meetings = [];


    constructor() {
        makeObservable(this, {
            meetings: observable,
            setMeetings: action,
            addMeeting: action,
        })
    }

    setMeetings = (meetings) => {
            this.meetings = meetings;
            console.log(this.meetings)
    }

    addMeeting = (meeting) => {
        this.meetings = [...this.meetings, meeting];
    }
}

export default new MeetingStore();
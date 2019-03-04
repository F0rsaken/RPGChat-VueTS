import moment from 'moment'
import { Observable } from 'rxjs'
//import irc from 'irc'
const irc = require("irc")

export default new class MessagesService {
    private allMesseges: Message[];
    private subscription: Observable<Message>;
    private client: any;

    constructor() {

        var client = new irc.Client('arkadianclockwork.ddns.net', 'testbot', {
            channels: ['#testchannel'],
        });

        

        // this.allMesseges = [
        //     { text: 'Testowa wiadomość, a co! 1', sendBy: 0 },
        //     { text: 'Testowa wiadomość, a co! 2', sendBy: 0 },
        //     { text: 'Testowa wiadomość, a co! 3', sendBy: 2 },
        //     { text: 'Testowa wiadomość, a co! 4', sendBy: 2 },
        //     { text: 'Testowa wiadomość, a co! 5', sendBy: 0 },
        //     { text: 'Testowa wiadomość, a co! 6', sendBy: 2 },
        //     { text: 'Testowa wiadomość, a co! 7', sendBy: 0 },
        //     { text: 'Testowa wiadomość, a co! 8', sendBy: 2 },
        //     { text: 'Testowa wiadomość, a co! 9', sendBy: 0 },
        //     { text: 'Testowa wiadomość, a co! 10', sendBy: 0 },
        //     { text: 'Lorem ipsum itp', sendBy: 2 }
        // ]

        this.subscription = Observable.create((observer: any) => {
            try {
                client.addListener('message', (from: string, to: string, message: string) => {
                    observer.next({ text: message, sendBy: from, sendTo: to });
                });

                // let index = 0;
                // let interval = setInterval(() => {
                //     this.allMesseges[index].recievedTime = moment();
                //     observer.next(this.allMesseges[index]);
                //     index++;
                //     if (index === this.allMesseges.length) {
                //         clearInterval(interval);
                //         observer.complete();
                //     }
                // }, 500);
            } catch(err) {
                observer.error(err);
            }
        })
    }

    public getMessages() {
        return this.allMesseges.slice();
    }

    public getMessageSubscription() {
        return this.subscription;
    }
}

export interface Message {
    text: string;
    sendTime?: moment.Moment;
    recievedTime?: moment.Moment;
    sendBy: string | number;
    sendTo: string | number;
}

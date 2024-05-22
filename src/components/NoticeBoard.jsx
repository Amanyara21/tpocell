'use client'
import { FaCaretRight } from "react-icons/fa";
import Marquee from "react-fast-marquee";

function NoticeBoard() {
    const mouseover = (e) => {
        console.log(e.stop);
    }
    return (
        <section className="cropper">
            <h2 className="heading-primary--main white-head1" id="notice">Notice Board</h2>
            <div className="alert">
                <div className="noticeBody notice-board">
                    <div
                        className="marquee"
                        // onMouseOver={()=>{this.stop()}} onMouseOut={()=>{this.start()}}
                    >
                        <hr className="dashed-hr" />
                        <a target="_blank"
                            href="https://drive.google.com/file/d/1-cGdbRYxUTg5dXCdwz3XFnLXg0L8H_xL/view?usp=drivesdk"
                            className="nt">  <FaCaretRight className="inline" />&nbsp;&nbsp;Selected Student for
                            Internship</a>
                        <hr className="dashed-hr" />
                        <a target="_blank"
                            href="https://drive.google.com/file/d/1-cGdbRYxUTg5dXCdwz3XFnLXg0L8H_xL/view?usp=drivesdk"
                            className="nt"> <FaCaretRight className="inline" />&nbsp;&nbsp;Selected Student for
                            Internship</a>
                        <hr className="dashed-hr" />
                        <a target="_blank"
                            href="https://drive.google.com/file/d/1-cGdbRYxUTg5dXCdwz3XFnLXg0L8H_xL/view?usp=drivesdk"
                            className="nt">  <FaCaretRight className="inline" />&nbsp;&nbsp;Selected Student for
                            Internship</a>
                        <hr className="dashed-hr" />
                        <a target="_blank"
                            href="https://drive.google.com/file/d/1-cGdbRYxUTg5dXCdwz3XFnLXg0L8H_xL/view?usp=drivesdk"
                            className="nt">  <FaCaretRight className="inline" />&nbsp;&nbsp;Selected Student for
                            Internship</a>
                        <hr className="dashed-hr" />
                        <a target="_blank"
                            href="https://drive.google.com/file/d/1-cGdbRYxUTg5dXCdwz3XFnLXg0L8H_xL/view?usp=drivesdk"
                            className="nt">  <FaCaretRight className="inline" />&nbsp;&nbsp;Selected Student for
                            Internship</a>
                        <hr className="dashed-hr" />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default NoticeBoard
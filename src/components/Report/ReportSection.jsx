import React, { useState } from 'react'
import { ReportData } from '../../Data/Data'
import "./ReportSection.css"
const ReportSection = () => {

	const [select, setSelect] = useState()
	const [selectTitle, setSelectTitle] = useState(false)
	const [selectDescription, setSelectDescription] = useState(false)
	const [optionId, setOptionId] = useState()

	const handleClick = (id, string) => {
		setOptionId(id)
		setSelect(string)
		// if (string === "title") {
		// 	setSelectTitle(!selectTitle)
		// }
		// else if (string === "description") {
		// 	setSelectDescription(!selectDescription)
		// 	return;
		//}
	}

	console.log(ReportData.length)
	return (
		<div>
			<table className='report-table'>
				<thead>
					<tr className='table-row'>
						<th>Reported Content</th>
						<th>Report Title</th>
						<th>Take a Look</th>
					</tr>
				</thead>
				{ReportData.map((report) => {
					return (
						<>
							<thead>
								<tr className='table-row'>
									<td>
										{report.VideoTitle}
									</td>
									<td onClick={() => handleClick(report.contentId, "title")}>here</td>
									<td onClick={() => handleClick(report.contentId, "description")}>description</td>
								</tr>

								{report.Report.map((item) =>
								(
									<>{
										console.log(ReportData.length,"length")
									}
										{select === "title" && optionId === item.parentId ?
											<div key={item.id}>
											{item.reportTitle}
											<span onClick={() => handleClick("close")}>x</span>
											</div> : select === "description" && optionId === item.parentId ?
												<div>{item.reportDescription}</div>
												: select === "close"
													? ("")
												: ("")
										}
										{/* 							
						<thead>
						<tr className='table-row'>
						<td>Contnet</td>
						<td onClick={() => handleClick(report.id)}>{report.reportTitle}
						<div className='message'>
						{ReportData.length}
						</div>
						</td>
						<td>here here</td>
						</tr>
						{report.subid.map((item) => {
							return(
								<>
								{optionId === item.parentid && select ?
									<div className='underDiv'>{item.reportDescription}</div>
									: ("")
								}
								</>
								)})}
							</thead> */}
									</>
								)
								)}
							</thead>
						</>)
				})}
			</table>
		</div>
	)
}

export default ReportSection

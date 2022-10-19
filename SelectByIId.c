ALTER Proc [dbo].[CandidatePartyPoll&Election_SelectByIdV2]
										@ElectionId int

as

/*
Declare @ElectionId int = 1
Execute [dbo].[CandidatePartyPoll&Election_SelectByIdV2]
										@ElectionId
Select * from dbo.ElectionResults
Select * from dbo.PollResults
*/


BEGIN

Select
	Distinct c.Surnames 
	,c.GivenName
	,c.AvatarUrl
	,pa.Name as PartyName
	,pa.ColorHEX as PartyColor
	,pa.Logo as PartyLogo
	,pa.Code as PartyCode
	,ElectionResults=
					(Select er.Percentage, er.Votes, e.ElectionDate
					From dbo.Candidates as ca 
					inner join dbo.ElectionResults as er on ca.Id = er.CandidateId 
					inner join dbo.Elections as e on e.Id = er.ElectionId
					For JSON AUTO)

From dbo.PollResults as p
inner join dbo.Candidates as c on p.CandidateId = c.id
inner join dbo.Parties as pa on pa.Id = c.PartyId
inner join dbo.Elections as el on el.Id = p.ElectionId


where el.Id = @ElectionId


END

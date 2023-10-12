import useFetch from "./useFetch"

export default function useEpisode (epID)
{
    const link = 'watch/'+epID
    const list = useFetch(link)
    const ep = list?.sources.find(obj=>obj.quality.includes('default'))

    const index = epID.lastIndexOf('-')
    const findEp = epID.substring(index+1)

    const prevEp = Number(findEp)-1
    const prev = epID.replace(epID,localStorage.getItem('watching')+'-episode-'+prevEp)
    
    const nextEp = Number(findEp)+1
    const next = epID.replace(epID,localStorage.getItem('watching')+'-episode-'+nextEp)

    const anime = useFetch('info/'+localStorage.getItem('watching'))
    const episodes = anime?.totalEpisodes

    return {prev,next,episodes,ep}
}
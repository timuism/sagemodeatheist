export interface EpisodeFeaturedImage {
  asset: {
    _ref: string
    _type: string
  }
  _type: string
}

export interface EpisodeData {
  _id: string
  title: string
  slug: {
    current: string
  }
  description: string
  epNotes: string
  epTranscript: string
  epNum: string
  epImage: EpisodeFeaturedImage
  isLive: boolean,
  releaseDate: string
}
const Transform = require('./../Transform');
module.exports = class CourseTranform extends Transform {

    transform(item) {
        return {
            'title' : item.title,
            'body' : item.body,
            'price' : item.price,
            ...this.showEpisodes(item)
        }
    }

    showEpisodes(item) {
        const EpisodeTransform = require('./EpisodeTransform');
        
        if(this.withEpisodesStatus) {
            return {
                episodes : new EpisodeTransform().transformCollection(item.episodes)
            }
        }
        return {}
    }

    withEpsiodes() {
        this.withEpisodesStatus = true;
        return this;
    }
}
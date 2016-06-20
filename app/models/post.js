import DS from "ember-data";
import { Model } from 'ember-pouch';

var Post = Model.extend({
	title: DS.attr('string', {defaultValue: ""}),
	body: DS.attr('string', {defaultValue: ""}),
	sort: DS.attr('string', {defaultValue: ""})
});

export default Post;

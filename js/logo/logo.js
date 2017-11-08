(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];

// library properties:
lib.properties = {
	width: 250,
	height: 182,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: []
};



lib.ssMetadata = [];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {	//we have found an element in the list		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) { //insert all it's children just before it		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {	//append element and it's parents in the array		
		cur = textInst;		
		while(cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Interpoler61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+QE2B7EiCmQDtCIDbCmQAQAMCCBuQCIBwBBAiQARgaA2hBQApgwgBgNQAKBthHCBQhDB6hfBEIgGACQk3kjlvjmQlpjhmRieQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+QE2B7EiCmQDtCIDbCmIA4AuQgIAHgGAMQgJAXgGAJIgTAbQgKANgRAgQgQAfgMAOIgaAgIgNAgQiuiHi9h2QlpjhmRieQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler59 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+QE2B7EiCmQBeA2BbA6IgCAFQgGAPgJACIgJAAIgKgCQgVgCgVAdQgwA9gbBDQgIAVgBAPQAAAJACAGIgSgLQlpjhmRieQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler58 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+QEFBnD2CGQgCAJADAKQAEASANAGQg0B0hABnQkPiXklhzQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler57 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+QBjAnBhAsQgIAJgLAVIhxDUQhsgxhvgrQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACgAPdRLIABABIgCAKIABgLg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler56 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQCoA1CVA6QCPjQClkeQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IBbAlIAAACQgHALgmAxQgeAng3BRIggAvIhUghQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEgkPAQXQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEujnEIlRQqrkHrZgqQiIgIiHAAQpYAAo7CcgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQH5AsHkCVQBbAdBVAeIgcAsQgPAZgEAKQgEALgFAXQgEAOgPAYQglAwgRAYIgKAPQp2jgqdgnQrmgrq8C/Qi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHyhDH+AsQHQAoG9CBIgoCCQgaBRgTAjIgEAHQoUijoxggQrmgrq8C/Qi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQHqhCH1AqIAAAMQACASgEALQgCAKgHAUQgEAPAFAVIAMAkQARAzgEA1IAAAEQiHgPiIgIQrmgrq8C/Qi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQCIgaEDgiQERglEUgDQgEAIABAQIAACsIAAACQgCAHACAIIAFAYQqFgNplCoQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsQBTgQCCgTQAEAoAJAyIAVB6QkbAnkUBMQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler49 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQCRlPHEilQCsg/DqgsIAHgBIAEATQAJA5AHAcQAHAdAUA6IAHARQi8Aii5AzQi6AzhSAcQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler48 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQBwkDEoidQAAAPAGAXQAUBMASA4IgdAKQiYAyhpA8QgXANgcANQgTAKgEAJQgFAKASBeQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACgA+bPCIAAgCIABACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler47 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgflAmeQitgmjEhfQjahqieiKQi4ifhDirQhOjFBVjEQAhhMAwhDQAEAmAGAeQgBAVAPBNQAVBmBPCGQBxC+DBCQQCxCEDiBPQH4CwI+h3QIdhxG+lSQEQjRDyknQAHgGAIgJIBriEIAuhFIALgLQAQgSAXgpQAGgGAAgFIAAgBQAEgEABgFQCLjLCfkUQBFh5DYmHIirhDQohjQoLkPQmdjYmUkDIgKgHIhvhEQhyhDibhrIgbgWIgBABIgCgGQgqgchKg1QAFAAAPAHIh3hQQhCgtgwglQBUAqCeBjICnBkIgJgJQiKhYibhvQh2hRiFheQijhyhQg9QAbALBqBGQB9BSAlAVQghgahAgvQhEgygggYQCCBICwBrICTBWICQBSIAEgEQg4gkiXhbQiOhVgXgQIjEh+QiChZhNg+QAjANCTBhQh2hTipiKQBEAxBeA9ICZBgQjzi+h+hkQjgiyiQiAQBsAvE7DaIKRHHQEWC8EjC1QBnAxBYA5QDsCZDyCLIAdAQQEkCoEqCRQH1DzHrCxQCpkpCNjTQCykKC1jLQDFjdBhhZQDDizCeguQDIg6BID6QArCSgFD7QgEC9gyDJQg1DVhfC1QjgGqlpBoQjRA9kSg5Qi2glknhxIjFFjQh3DWhSCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgBACIgCADIgDAFIgBACIgBACIgBADIgEAGIgDAEQgEAEgBAEIgBAAIgBADIhJBdIgFAHIgBAAQicDfieCwQiyDHi7CXQmWFDnxCIQkrBRkfAAQjXAAjQgtgEAmbgW7QgZASivCWQinCQifC7QjtEXj7GpQByAoBFAXQG9CVE9hIQGOhcBhmzQA7kFgTj9QgalsjPgbIgUgBQhYAAh9BagAv43KIj6inQBZA+CcBnIAFACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-200.4,-164.4,400.9,328.9);


(lib.Interpoler46 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EggdAmeQiugmjEhfQjZhqifiKQhrhdhEhiICriIIAngeQBgB9CIBmQCyCEDhBPQH5CwI9h3QIehxG9lSQERjRDyknQAGgGAIgJIBsiEIAuhFIALgLQAPgSAYgpQAGgGAAgFIAAgBQADgEACgFQCLjLCekUQBGh5DYmHIirhDQohjQoLkPQmejYmUkDIgJgHIhwhEQhxhDichrIgbgWIgBABIgBgGQgrgchKg1QAGAAAPAHIh3hQQhDgtgvglQBTAqCeBjICoBkIgKgJQiKhYibhvQh1hRiFheQijhyhQg9QAaALBrBGQB8BSAmAVQghgahBgvQhEgygfgYQCBBICxBrICTBWICPBSIAEgEQg3gkiYhbQiNhVgYgQIjDh+QiDhZhNg+QAkANCTBhQh2hTipiKQBDAxBfA9ICYBgQjyi+h+hkQjhiyiQiAQBsAvE8DaIKRHHQEVC8EkC1QBmAxBZA5QDsCZDyCLIAcAQQEkCoErCRQH1DzHrCxQCokpCOjTQCxkKC2jLQDEjdBhhZQDEizCeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC1QjgGqlqBoQjRA9kRg5Qi2glkohxIjFFjQh3DWhRCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgCACIgBADIgDAFIgBACIgCACIgBADIgDAGIgEAEQgEAEgBAEIAAAAIgCADIhIBdIgFAHIgBAAQidDfidCwQiyDHi7CXQmXFDnxCIQkqBRkgAAQjWAAjQgtgEAljgW7QgZASivCWQinCQifC7QjuEXj6GpQBxAoBGAXQG9CVE9hIQGNhcBimzQA6kFgSj9QgblsjPgbIgUgBQhXAAh9BagAww3KIj6inQBYA+CcBnIAGACg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-196.7,-164.4,393.4,328.9);


(lib.Interpoler45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgiJAmeQiugmjEhfQhAggg7giIANgVQAJgOAxg6QAYgdAng3IAagkQB4BECJAwQH5CwI9h3QIehxG9lSQERjRDyknQAHgGAHgJIBsiEIAuhFIALgLQAPgSAYgpQAGgGAAgFIAAgBQADgEACgFQCLjLCekUQBGh5DYmHIirhDQohjQoJkPQmgjYmUkDIgJgHIhwhEQhxhDichrIgbgWIgBABIgBgGQgrgchKg1QAGAAAPAHIh3hQQhDgtgvglQBTAqCeBjICoBkIgKgJQiKhYibhvQh1hRiFheQijhyhQg9QAaALBrBGQB8BSAmAVQghgahBgvQhEgygfgYQCBBICxBrICTBWICPBSIAEgEQg3gkiYhbQiNhVgYgQIjDh+QiDhZhNg+QAkANCTBhQh2hTipiKQBDAxBfA9ICYBgQjyi+h+hkQjhiyiQiAQBsAvE8DaIKRHHQEVC8EkC1QBmAxBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1DzHrCxQCokpCOjTQCxkKC2jLQDEjdBhhZQDEizCeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC1QjgGqlqBoQjRA9kRg5Qi2glkohxIjFFjQh3DWhRCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgCACIgBADIgDAFIgBACIgCACIgBADIgDAGIgEAEQgEAEgBAEIAAAAIgCADIhIBdIgFAHIgBAAQidDfidCwQiwDHi9CXQmXFDnxCIQkqBRkgAAQjWAAjQgtgEAj3gW7QgZASivCWQinCQifC7QjuEXj6GpQBxAoBGAXQG9CVE9hIQGNhcBimzQA6kFgSj9QgblsjPgbIgUgBQhXAAh9BagAyc3KIj6inQBYA+CcBnIAGACgEgtKAhHIACgBIgBACIgBgBg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-164.4,379.3,328.9);


(lib.Interpoler44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EghgAmmIACgKIAPhQQAKgnADgUQAIgjACgZQABgSAAgeQG0BuHkhkQIehxG9lSQERjRDyknQAHgGAHgJIBsiEIAuhFIALgLQAPgSAYgpQAGgGAAgFIAAgBQADgEACgFQCLjLCekUQBGh5DYmHIirhDQohjQoJkPQmgjYmUkDIgJgHIhwhEQhxhDichrIgbgWIgBABIgBgGQgrgchKg1QAGAAAPAHIh3hQQhDgtgvglQBTAqCeBjICoBkIgKgJQiKhYibhvQh1hRiFheQijhyhQg9QAaALBrBGQB8BSAmAVQghgahBgvQhEgygfgYQCBBICxBrICTBWICPBSIAEgEQg3gkiYhbQiNhVgYgQIjDh+QiDhZhNg+QAkANCTBhQh2hTipiKQBDAxBfA9ICYBgQjyi+h+hkQjhiyiQiAQBsAvE8DaIKRHHQEVC8EkC1QBmAxBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1DzHrCxQCokpCOjTQCxkKC2jLQDEjdBhhZQDEizCeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC1QjgGqlqBoQjRA9kRg5Qi2glkohxIjFFjQh3DWhRCLQhoCwhRB+IABAAIgJAQIgCAEIgrBLIgCACIgBADIgDAFIgBACIgCACIgBADIgDAGIgEAEQgEAEgBAEIAAAAIgCADIhIBdIgFAHIgBAAQidDfidCwQiwDHi9CXQmXFDnxCIQkqBRkgAAQjBAAi8glgEAj3gW7QgZASivCWQinCQifC7QjuEXj6GpQBxAoBGAXQG9CVE9hIQGNhcBimzQA6kFgSj9QgblsjPgbIgUgBQhXAAh9BagAyc3KIj6inQBYA+CcBnIAGACgEgtKAhHIACgBIgBACIgBgBg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-164.4,379.3,328.9);


(lib.Interpoler43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgZxAjhQDjABDvgxQIehxG9lSQERjRDyknQAHgFAHgKIBsiEIAuhEIALgMQAPgSAYgpQAGgGAAgFIAAgBQADgEACgFQCLjLCekUQBGh5DYmHIirhDQohjQoJkPQmgjYmUkDIgJgHIhwhEQhxhDichrIgbgWIgBABIgBgGQgrgchKg1QAGAAAPAHIh3hQQhDgtgvglQBTAqCeBjICoBkIgKgJQiKhYibhvQh1hRiFheQijhyhQg9QAaALBrBGQB8BSAmAVQghgahBgvQhEgygfgYQCBBICxBrICTBWICPBSIAEgEQg3gkiYhbQiNhVgYgQIjDh+QiDhZhNg+QAkANCTBhQh2hTipiKQBDAxBfA9ICYBgQjyi+h+hkQjhiyiQiAQBsAvE8DaIKRHHQEVC8EkC1QBmAxBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1DzHrCxQCokpCOjTQCxkKC2jLQDEjdBhhZQDEizCeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC1QjgGqlqBoQjRA9kRg5Qi2glkohxIjFFjQh3DWhRCLQhoCwhRB+IABABIgJAPIgCAEIgrBLIgCACIgBADIgDAFIgBACIgCACIgBADIgDAGIgEAEQgEAEgBAEIAAABIgCACIhIBdIgFAHIgBAAQidDfidCwQiwDHi9CXQmXFDnxCIQjmA+jgAPgEAj3gW5QgZASivCWQinCQifC7QjuEXj6GpQBxAoBGAXQG9CVE9hIQGNhcBimzQA6kFgSj9QgblsjPgbIgUgBQhXAAh9BagAyc3IIj6inQBYA+CcBnIAGACgEgtKAhJIACAAIgBABIgBgBg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-164.3,379.3,328.6);


(lib.Interpoler42 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgSsAmXQgDgIgCgMIgUiSQgBgLgCgIIApgIQIehwG9lSQERjSDyknQAHgFAHgKIBsiEIAuhEIALgLQAPgTAYgpQAGgGAAgFIAAAAQADgFACgEQCLjMCekUQBGh5DYmJIirhBQohjPoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg1QAGAAAPAHIh3hQQhDgtgvglQBTAqCeBkICoBkIgKgJQiKhZibhvQh1hRiFheQijhyhQg9QAaAMBrBGQB8BRAmAVQghgahBgvQhEgygfgYQCBBICxBsICTBVICPBSIAEgEQg3gkiYhbQiNhUgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAwBfA9ICYBgQjyi9h+hlQjhixiQiBQBsAvE8DbIKRHGQEVC8EkC1QBmAxBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwQCokpCOjTQCxkKC2jLQDEjdBhhYQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC1QjgGrlqBnQjRA9kRg4Qi2glkoh0IjFFlQh3DXhRCKQhoCwhRB+IABABIgJAPIgCAEIgrBLIgCACIgBADIgDAFIgBACIgCADIgBACIgDAGIgEAEQgEAEgBAEIAAABIgCACIhIBeIgFAGIgBAAQidDfidCxQiwDGi9CXQmXFEnxCHIgJADIgKgNgEAj3gWTQgZARivCWQinCQifC7QjuEXj6GpQBxApBGAWQG9CVE9hIQGNhbBim0QA6kEgSj+QgblsjPgaIgUgCQhXAAh9BbgAyc2jIj6imQBYA9CcBoIAGABgEgtKAhuIACAAIgBABIgBgBg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-161.8,379.3,323.7);


(lib.Interpoler40 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAjmfqQAAgVgFgKIAngdQERjSDyknQAHgFAHgJIBsiFIAuhEIALgLQAPgSAYgpQAGgHAAgFIAAAAQADgFACgEQCLjMCekUQBGh5DYmIIirhDQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwQCokpCOjTQCxkJC2jMQDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQjRA8kRg4Qi2glkohzIjFFkQh3DXhRCKQhoCwhRB/IABAAIgJAQIgCADIgrBLIgCACIgBADIgDAGIgBABIgCADIgBACIgDAHIgEAEQgEADgBAEIAAABIgCACIhIBeIgFAGIgBAAQidDgidCwQicCwimCKgEAj3gT5QgZASivCWQinCPifC8QjuEXj6GoQBxApBGAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaIgUgCQhXAAh9BbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler38 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAGNVYIAsg2IAuhEIALgLQAPgSAYgpQAGgHAAgFIAAAAQADgFACgEQCLjMCekUQBGh5DYmIIirhDQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwQCokpCOjTQCxkJC2jMQDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQjRA8kRg4Qi2glkohzIjFFkQh3DXhRCKQhoCwhRB/IABAAIgJAQIgCADIgrBLIgCACIgBADIgDAGIgBABIgCADIgBACIgDAHIgEAEQgEADgBAEIAAABIgCACIhIBeIgFAGIgBAAIgDAEQgCgZgEgWgEAj3gT5QgZASivCWQinCPifC8QjuEXj6GoQBxApBGAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaIgUgCQhXAAh9BbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler37 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgALSOJQAAgMgBgIQA9hjA/hvQBGh5DYmIIirhDQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwQCokpCOjTQCxkJC2jMQDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQjRA8kRg4Qi2glkohzIjFFkQh3DXhRCKIgYAogEAj3gT5QgZASivCWQinCPifC8QjuEXj6GoQBxApBGAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaIgUgCQhXAAh9BbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler35 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwQCokpCOjTQCxkJC2jMQDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgEAj3gT5QgZASivCWQinCPifC8QjuEXj6GoQBxApBGAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaIgUgCQhXAAh9BbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler34 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaQhcgMiMBlQgZASivCWQinCPifC8QiLCjiQDVQgCgKgIgIIgHgFQA3hYAzhMQCxkJC2jMQDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler32 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaQhcgMiMBlQgZASivCWQiGBziCCQQAAgWABgIQAFgXAAgKQABgPgFgMQAyg9Azg5QDEjcBhhZQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaQhcgMiMBlQgZASivCWQgsAmgsApIgBgEIgSg7QgBgGAAgSQCdiuBThMQDEi0CeguQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler30 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgblsjPgaQhRgLh2BNIAAgQIgCiHQCKhsB1giQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler29 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCTBhQh2hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEmCoEpCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGNhZBimzQA6kFgSj+QgZlUi3guIAAgSQgDhTACh5IAdgJQDIg6BID6QAqCSgFD7QgDC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler27 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgtKAkIIACAAIgBABIgBgBgAZVE/QizglkghvQgEgEgEgCQgKgGgLAAIilhAQohjOoJkQQmgjXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchJg0QAFgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgJgJQiLhZibhvQh1hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAFgDQg4gliXhaQiOhVgYgQIjDh+QiDhahMg+QAjANCTBhQh2hTipiJQBEAxBeA8ICYBgQjyi9h+hkQjgiyiRiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEnCoEoCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQG9CTE9hJQGOhZBhmzQAvjTgDjOIALgLQAogtAphAQAOgXAUgkIAAA1QgEC9gyDJQg1DVhfC2QjgGqlqBoQhsAfh9AAQh1AAiEgbgAyc0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.6,-151.7,379.3,303.5);


(lib.Interpoler25 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgqTAkIIACAAIgBABIgBgBgAcME/QizglkhhvQgDgEgFgCQgJgGgLAAIilhAQohjOoLkQQmejXmUkEIgJgHIhwhDQhxhEichrIgbgWIgBABIgBgGQgrgchKg0QAGgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgKgJQiKhZibhvQh1hQiFheQijhzhQg9QAaAMBrBGQB8BRAmAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAEgDQg3gliYhaQiNhVgYgQIjDh+QiDhahNg+QAkANCSBhQh1hTipiJQBDAxBfA8ICYBgQjyi9h+hkQjhiyiQiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDsCZDyCLIAcAQQEkCoErCRQH1D0HrCwIABgCIADACQAIAIALABQBsAmBEAXQG9CTE9hJQBwgaBYgzIAIAEQAgAPA7AVQi0DXjyBGQhsAfh9AAQh1AAiEgbgAvl0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-177.6,-151.7,355.4,303.5);


(lib.Interpoler23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EglMAkIIADAAIgCABIgBgBgEAhTAE/QizglkghvQgEgEgEgCQgJgGgMAAIilhAQohjOoLkQQmdjXmUkEIgKgHIhvhDQhyhEibhrIgbgWIgBABIgCgGQgqgchKg0QAFgBAPAHIh3hPQhCgugwglQBUArCeBjICnBkIgJgJQiKhZibhvQh2hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQCCBICwBsICTBVICQBSIAEgDQg4gliXhaQiOhVgXgQIjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIKRHHQEWC7EjC2QBnAwBYA5QDsCZDwCLIAdAQQEmCoEqCRQH1D0HrCwIACgCIACACQAJAIALABQBsAmBDAXQDbBHC8AUIgmBaIgjBLQgUAsgKAhIgEAPQhFgHhKgPgAqe0JIj6imQBZA+CcBnIAFABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-156.1,-151.7,312.4,303.5);


(lib.Interpoler22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Egi1AkIIACAAIgBABIgBgBgAcXCrQgEgEgEgCQgKgGgLAAIilhAQohjOoLkQQmgjXmSkEIgJgHIhvhDQhyhEichrIgbgWIAAABIgCgGQgrgchJg0QAFgBAPAHIh3hPQhDgugvglQBTArCeBjICoBkIgJgJQiLhZibhvQh1hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahBgwQhEgxgfgZQCBBICxBsICTBVICPBSIAFgDQg4gliXhaQiOhVgYgQIjDh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICYBgQjyi9h+hkQjgiyiRiAQBsAuE8DbIKRHHQEVC7EkC2QBmAwBZA5QDqCZDyCLIAdAQQEmCoEqCRQH1D0HrCwIABgCIADACQAIAIALABQBtAmBDAXQA1AQA0AOIgGANQggBHgbAtQgVAhgoA4IgTAZQh4gliWg6gAoH0JIj6imQBYA+CcBnIAGABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.3,-151.7,292.6,303.5);


(lib.Interpoler21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgdOAkIIADAAIgCABIgBgBgAOQl/QmfjXmUkEIgKgHIhthDQhyhEibhrIgbgWIgBABIgCgGQgqgchKg0QAFgBAPAHIh3hPQhCgugwglQBUArCeBjICnBkIgJgJQiKhZibhvQh2hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQCCBICwBsICTBVICQBSIAEgDQg4gliXhaQiOhVgXgQIjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIKRHHQEWC7EhC2QBnAwBYA5QDsCZDyCLIAdAQQEmCoEqCRQEjCNEfB3IgNAjQgTA9gtBZIgfA9QmwivmjjZgAig0JIj6imQBZA+CcBnIAFABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-122.7,-151.7,245.5,303.5);


(lib.Interpoler19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgayAkIIACAAIgBABIgBgBgAauhNIAFABIAAABIgFgCgAQsl/QmfjXmUkEIgKgHIhvhDQhyhEiZhrIgbgWIgBABIgCgGQgqgchKg0QAFgBAPAHIh3hPQhCgugwglQBUArCeBjICnBkIgJgJQiKhZibhvQh2hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQCCBICwBsICTBVICQBSIAEgDQg4gliXhaQiOhVgXgQIjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIKRHHQEWC7EhC2QBnAwBYA5QDsCZDyCLIAdAQQEmCoEqCRIAoATQgJASgJAdIgVBDIgOAdQgIARgDANQgCAQgCAeQgDAKgMAgIAAACQiqhRiohXgAgE0JIj6imQBZA+CcBnIAFABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-151.7,225,303.5);


(lib.Interpoler17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgayAkIIACAAIgBABIgBgBgAauhNIAFABIAAABIgFgCgAD5taIgKgHIhvhDQhyhEiZhrIgbgWIgBABIgCgGQgqgchKg0QAFgBAPAHIh3hPQhCgugwglQBUArCeBjICnBkIgJgJQiKhZibhvQh2hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQCCBICwBsICTBVICQBSIAEgDQg4gliXhaQiOhVgXgQIjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIKRHHQEWC7EhC2QBnAwBYA5QBwBIBwBFQgPAGgIAFQgNAJgJAdQgRAughA+IgsBPQhdg5hdg8gAgE0JIj6imQBZA+CcBnIAFABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-151.7,225,303.5);


(lib.Interpoler16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgayAkIIACAAIgBABIgBgBgAauhNIAFABIAAABIgFgCgAimxpIgBABIgCgGQgqgchKg0QAFgBAPAHIh3hPQhCgugwglQBUArCeBjICTBYIgKAHQgUANgHAIgAmH05Qh2hQiFheQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQCCBICwBsICTBVICQBSIAEgDQg4gliXhaQiOhVgXgQIjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIKRHHQDfCWDmCTQg1BWhiBDQiHhXiWhsgAgE0JIj6imQBZA+CcBnIAFABg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-151.7,225,303.5);


(lib.Interpoler15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgayAkIIACAAIgBABIgBgBgAauhNIAFABIAAABIgFgCgAqC3nQijhzhQg9QAbAMBqBGQB9BRAlAWQghgahAgwQhEgxgggZQB8BFClBkIgSA6Ih+hYgAou3+IjEh+QiChahNg+QAjANCTBhQh2hTipiJQBEAxBeA8ICZBgQjzi9h+hkQjgiyiQiAQBsAuE7DbIJsGtIgCAEQgVArgZBNIhBgog");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-151.7,225,303.5);


(lib.Interpoler13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A6ySrIACgBIgBACIgBgBgAauyrIAFABIAAABIgFgCg");
	this.shape.setTransform(0,0,0.656,0.656);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-112.5,-78.4,225,156.9);


(lib.Interpoler12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AMtJNIghgdQgIgJgbAKQghALgOgCQgCAAACgNQADgOgHACIgiACQgUABgLgFQgGACgFgSQgGgSgGABQgWAAgdALQgfALAVAIQAcAJAkAIIA9AOQhMgDg3gXQgKgFgigXQgfgUgVgGQg4gCgdgDQg0gEgjgQQhAghhcglIiXg/Qi1hMhohUIg2gdQgegQgRgOQgigeg8gcQhGgdgigQQh5g4gVhiQgRhKhDgiQgagNgNAFQgOAFAMAXQgVgjgdgdIgrgnQgognAIhMQABggAdgwQAshJBHAEQAgATBcAyQBSAwAfAoQBJBlCQBZIB3BJQBGArAwAnQByBdCDBQQBXA0CbBQQClBVBJArIBwA+IACAEIAAgDIAJAFQABAMAJAEQAFADAPABIAMACIAyAaIgFABIAJABIAWALQAGAIACAIQADAEAEgCIAJgGQBdAsBIANIAOAPQAQASAGALIgQAAIAAgNQAAgIgEgDIgQAIQgLgSgRgEQgKgCgYADIAFASQAJACADgFQABgEgDgFQAaAeApABIAAADQgcAFgrAEIhIAGIgTADQgJgCgPgJgALxHTQgCgKAIgDIgDAAIgMgBQAGAFADAJIAAAAgAI3F2QgFgSgGgIQgJgKgPAEQAFAPAKAJQAJAIALAAIAAAAgAPnJDg");
	this.shape.setTransform(-11.1,-2,0.711,0.711);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050505").s().p("AgfAZQALgYADgBQAKgMARgBIgCgRQAEgCAHADIANAEQgHATgNAJQgMALgSACQAEAAADADQADAFgFAHIgSgGg");
	this.shape_1.setTransform(81,29.8,0.711,0.711);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#050505").s().p("AiUAfQgYgFAggQQAZgKAcgHQAGgCALAOQALAQAHgDQAPACAUgHIAjgOQAFgEAEAMQADANACgBQAWgGAYgZQAWgYAKACQAaABAXgDIgRAEQgKACgHAEQgnAZgTAHQgIAFgaAJIgTAJIgLADQgvAEgaABQgmAAgogGg");
	this.shape_2.setTransform(65,42.1,0.711,0.711);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#050505").s().p("AgEAAQADgBAGgFQgEAFAEAIQgFgHgEAAg");
	this.shape_3.setTransform(67.3,34.6,0.711,0.711);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#050505").s().p("AgJABQAEgBAFAAQAGgBAEABIgKABIgEABg");
	this.shape_4.setTransform(66.1,34.6,0.711,0.711);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#050505").s().p("AAAAAIADAAIgFABg");
	this.shape_5.setTransform(67.9,34,0.711,0.711);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#050505").s().p("AACAGQgGgGgGgBIAVgEIgDAIQAAABgBAAQAAABAAAAQgBABgBAAQAAAAgBAAIgCAAg");
	this.shape_6.setTransform(70.4,33.9,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83.2,-44.6,166.6,89.4);


(lib.Interpoler11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AMtJNIghgdQgIgJgbAKQghALgOgCQgCAAACgNQADgOgHACIgiACQgUABgLgFQgGACgFgSQgGgSgGABQgWAAgdALQgfALAVAIQAcAJAkAIIA9AOQhMgDg3gXQgKgFgigXQgfgUgVgGQg4gCgdgDQg0gEgjgQQhAghhcglIiXg/Qi1hMhohUIg2gdQgegQgRgOQgigeg8gcQhGgdgigQQh5g4gVhiQgRhKhDgiQgagNgNAFQgOAFAMAXQgVgjgdgdIgrgnQgognAIhMQABggAdgwQAshJBHAEQAgATBcAyQBSAwAfAoQBJBlCQBZIB3BJQBGArAwAnQByBdCDBQQBXA0CbBQQClBVBJArIBwA+IACAEIAAgDIAJAFQABAMAJAEQAFADAPABIAMACIAyAaIgFABIAJABIAWALQAGAIACAIQADAEAEgCIAJgGQBdAsBIANIAOAPQAQASAGALIgQAAIAAgNQAAgIgEgDIgQAIQgLgSgRgEQgKgCgYADIAFASQAJACADgFQABgEgDgFQAaAeApABIAAADQgcAFgrAEIhIAGIgTADQgJgCgPgJgALxHTQgCgKAIgDIgDAAIgMgBQAGAFADAJIAAAAgAI3F2QgFgSgGgIQgJgKgPAEQAFAPAKAJQAJAIALAAIAAAAgAPnJDg");
	this.shape.setTransform(-7.6,-2,0.711,0.711);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#050505").s().p("AiUAfQgYgFAggQQAZgKAcgHQAGgCALAOQALAQAHgDQAPACAUgHIAjgOQAFgEAEAMQADANACgBQAWgGAYgZQAWgYAKACQAaABAXgDIgRAEQgKACgHAEQgnAZgTAHQgIAFgaAJIgTAJIgLADQgvAEgaABQgmAAgogGg");
	this.shape_1.setTransform(68.5,42.1,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-79.8,-44.6,159.6,89.4);


(lib.Interpoler10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AMtJNIghgdQgIgJgbAKQghALgOgCQgCAAACgNQADgOgHACIgiACQgUABgLgFQgGACgFgSQgGgSgGABQgWAAgdALQgfALAVAIQAcAJAkAIIA9AOQhMgDg3gXQgKgFgigXQgfgUgVgGQg4gCgdgDQg0gEgjgQQhAghhcglIiXg/Qi1hMhohUIg2gdQgegQgRgOQgigeg8gcQhGgdgigQQh5g4gVhiQgRhKhDgiQgagNgNAFQgOAFAMAXQgVgjgdgdIgrgnQgognAIhMQABggAdgwQAshJBHAEQAgATBcAyQBSAwAfAoQBJBlCQBZIB3BJQBGArAwAnQByBdCDBQQBXA0CbBQQClBVBJArIBwA+IACAEIAAgDIAJAFQABAMAJAEQAFADAPABIAMACIAyAaIgFABIAJABIAWALQAGAIACAIQADAEAEgCIAJgGQBdAsBIANIAOAPQAQASAGALIgQAAIAAgNQAAgIgEgDIgQAIQgLgSgRgEQgKgCgYADIAFASQAJACADgFQABgEgDgFQAaAeApABIAAADQgcAFgrAEIhIAGIgTADQgJgCgPgJgALxHTQgCgKAIgDIgDAAIgMgBQAGAFADAJIAAAAgAI3F2QgFgSgGgIQgJgKgPAEQAFAPAKAJQAJAIALAAIAAAAgAPnJDg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-72.1,-42.6,144.3,85.3);


(lib.Interpoler9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AJMIUQg4gCgegDQg0gEgjgQQhAghhbglIiZg/QizhMhphUIg2gdQgegQgQgOQgigeg9gcQhGgdghgQQh6g4gVhiQgRhKhDgiQgZgNgNAFQgOAFALAXQgVgjgdgdIgqgnQgognAHhMQACggAdgwQAshJBGAEQAhATBcAyQBRAwAgAoQBJBlCPBZIB4BJQBGArAvAnQBwBbCFBSQBYA0CaBQQClBVBKArIBwA+IACAEIgBgDIAJAFQABAMAJAEQAGADAOABIAMACIAMAGIhuAnIh5AtQgegUgVgGgALHGfQgEgSgHgIQgJgKgOAEQAFAPAJAJQAJAIALAAIAAAAg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61.8,-39.7,123.8,79.5);


(lib.Interpoler8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AF7HTIiZg+Qi1hMhmhUIg2gdQgegQgRgPQgigdg8gcQhGgegigQQh5g5gVhhQgRhJhDgjQgagNgNAFQgOAGAMAXQgVgkgdgcIgrgnQgognAIhMQABghAdgwQAshJBHAEQAgATBcAyQBSAxAfAoQBJBkCQBaIB3BIQBEAsAwAmQByBbCFBSQBXA1CbBQQBrA3BEAlQguAZgzAhIiJBhQg6gchPghg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-53.4,-37.5,106.8,75.2);


(lib.Interpoler7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("ABaE+Ig2gdQgegQgPgOQgigeg8gcQhGgdgigQQh5g6gVhiQgRhIhDgiQgagNgNAFQgOAFAMAXQgVgjgdgdIgrgnQgognAIhMQABggAdgwQAshJBHAEQAgATBcAyQBSAwAfAoQBJBlCQBZIB1BJQBGApAwAnQByBdCFBSQAxAdBGAnIgKAFQiEBJhAAnQgmAXgkAYQiPhBhYhHg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-42.7,-32.3,85.6,64.7);


(lib.Interpoler6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("ADBFxIg2gdQgegQgQgOQgigeg7gcQhGgdghgQQh6g6gVhiQgRhIhDgiQgZgNgNAFQgOAFALAXQgVgjgdgdIgqgnQgognAHhMQACggAdgwQAshJBGAEQAhATBcAyQBRAwAgAoQBJBlCNBZIB4BHQBGArAvAnQBMA9BUA5QhDAuhnBLQgyAlgmAeQgZgRgWgSg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.4,-28.7,70.9,57.5);


(lib.Interpoler5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("ABaFCQhGgegggQQh5g5gVhjQgRhJhDgjQgagMgNAEQgOAGAMAXQgVgigdgcIgrgnQgognAIhMQABghAdgwQAshJBHAEQAgATBcAyQBSAxAfAoQBHBkCQBYIB3BIQA2AiAoAeIhSAoQhYAsgtAgQgjAbgqAqIgYgMg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-28.9,-23.7,57.9,47.5);


(lib.Interpoler4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("Ag2C0QgRhKhDgiQgagNgNAFQgOAFAMAXQgVgjgdgdIgrglQgognAIhMQABggAdgwQAshJBHAEQAgATBcAyQBQAwAfAoQBJBlCQBXIANAJIgMAKQgPAKgHADQgDACgYADQgUAEgdAPQghATg5AoQhAAugsApQgpgpgLg1g");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-21.8,-19.5,43.6,39.1);


(lib.Interpoler3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AgsChQgagNgNAFQgOAFAMAXQgVgjgdgdIgrgnQgognAIhKQABggAdgwQAshJBHAEQAgATBaAyQBSAwAfAoQATAaAXAXIhbAvQg4AfgaAkIgOAXQgJAMgJAHIgPAHQgQgOgUgKg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-15.1,-13.2,30.3,26.5);


(lib.Interpoler2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("Ah4ArQABghAdguQAshJBFAEIBkA4IgCABQgQAIgYAQQghAYgHACQgMAIgsAXQgkATgUAPQgbAagPALIgEACQgHgcAEgjg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8.7,-7.5,17.5,15.2);


(lib.Interpoler1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#050505").s().p("AAAAAIAAAAIABAAIgBAAIAAAAg");
	this.shape.setTransform(0,0,0.711,0.711);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.1,0,0.2,0.1);


// stage content:
(lib.logo = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// texte
	this.instance = new lib.Interpoler1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(112.3,73,0.455,0.455,0,0,0,0.1,0);
	this.instance._off = true;

	this.instance_1 = new lib.Interpoler2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.4,74.6,0.455,0.455,0,0,0,0,0.1);
	this.instance_1._off = true;

	this.instance_2 = new lib.Interpoler3("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(111.3,77.2,0.455,0.455);
	this.instance_2._off = true;

	this.instance_3 = new lib.Interpoler4("synched",0);
	this.instance_3.parent = this;
	this.instance_3.setTransform(114.3,80.1,0.455,0.455,0,0,0,0.1,0);
	this.instance_3._off = true;

	this.instance_4 = new lib.Interpoler5("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(117.5,82,0.455,0.455);
	this.instance_4._off = true;

	this.instance_5 = new lib.Interpoler6("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(120.5,84.2,0.455,0.455);
	this.instance_5._off = true;

	this.instance_6 = new lib.Interpoler7("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(123.8,85.9,0.455,0.455);
	this.instance_6._off = true;

	this.instance_7 = new lib.Interpoler8("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(128.7,88.3,0.455,0.455,0,0,0,0,0.1);
	this.instance_7._off = true;

	this.instance_8 = new lib.Interpoler9("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(132.5,89.2,0.455,0.455);
	this.instance_8._off = true;

	this.instance_9 = new lib.Interpoler10("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(137.2,90.6,0.455,0.455);
	this.instance_9._off = true;

	this.instance_10 = new lib.Interpoler11("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(140.7,91.5,0.455,0.455,0,0,0,0.1,0.1);
	this.instance_10._off = true;

	this.instance_11 = new lib.Interpoler12("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(142.3,91.5,0.455,0.455,0,0,0,0,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},68).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).wait(2));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(68).to({_off:false},0).to({_off:true,regX:0,regY:0.1,x:108.4,y:74.6},1).wait(12));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(68).to({_off:false},1).to({_off:true,regY:0,x:111.3,y:77.2},1).wait(11));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},1).to({_off:true,regX:0.1,x:114.3,y:80.1},1).wait(10));
	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(70).to({_off:false},1).to({_off:true,regX:0,x:117.5,y:82},1).wait(9));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(71).to({_off:false},1).to({_off:true,x:120.5,y:84.2},1).wait(8));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(72).to({_off:false},1).to({_off:true,x:123.8,y:85.9},1).wait(7));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(73).to({_off:false},1).to({_off:true,regY:0.1,x:128.7,y:88.3},1).wait(6));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},1).to({_off:true,regY:0,x:132.5,y:89.2},1).wait(5));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(75).to({_off:false},1).to({_off:true,x:137.2,y:90.6},1).wait(4));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(76).to({_off:false},1).to({_off:true,regX:0.1,regY:0.1,x:140.7,y:91.5},1).wait(3));
	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(77).to({_off:false},1).to({_off:true,regX:0,x:142.3},1).wait(2));

	// l
	this.instance_12 = new lib.Interpoler13("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(89.2,111.9,0.455,0.455,0,0,0,0.1,0);
	this.instance_12._off = true;

	this.instance_13 = new lib.Interpoler15("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(89.2,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_13._off = true;

	this.instance_14 = new lib.Interpoler16("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(89.2,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.instance_15 = new lib.Interpoler17("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(89.2,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_15._off = true;

	this.instance_16 = new lib.Interpoler19("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(89.2,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_16._off = true;

	this.instance_17 = new lib.Interpoler21("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(93.8,78.6,0.455,0.455);
	this.instance_17._off = true;

	this.instance_18 = new lib.Interpoler22("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(104.6,78.6,0.455,0.455);
	this.instance_18._off = true;

	this.instance_19 = new lib.Interpoler23("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(109.1,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_19._off = true;

	this.instance_20 = new lib.Interpoler25("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(118.8,78.6,0.455,0.455);
	this.instance_20._off = true;

	this.instance_21 = new lib.Interpoler27("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_21._off = true;

	this.instance_22 = new lib.Interpoler29("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_22._off = true;

	this.instance_23 = new lib.Interpoler30("synched",0);
	this.instance_23.parent = this;
	this.instance_23.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_23._off = true;

	this.instance_24 = new lib.Interpoler31("synched",0);
	this.instance_24.parent = this;
	this.instance_24.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_24._off = true;

	this.instance_25 = new lib.Interpoler32("synched",0);
	this.instance_25.parent = this;
	this.instance_25.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_25._off = true;

	this.instance_26 = new lib.Interpoler34("synched",0);
	this.instance_26.parent = this;
	this.instance_26.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_26._off = true;

	this.instance_27 = new lib.Interpoler35("synched",0);
	this.instance_27.parent = this;
	this.instance_27.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_27._off = true;

	this.instance_28 = new lib.Interpoler37("synched",0);
	this.instance_28.parent = this;
	this.instance_28.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_28._off = true;

	this.instance_29 = new lib.Interpoler38("synched",0);
	this.instance_29.parent = this;
	this.instance_29.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_29._off = true;

	this.instance_30 = new lib.Interpoler40("synched",0);
	this.instance_30.parent = this;
	this.instance_30.setTransform(124.3,78.6,0.455,0.455,0,0,0,0.1,0);
	this.instance_30._off = true;

	this.instance_31 = new lib.Interpoler42("synched",0);
	this.instance_31.parent = this;
	this.instance_31.setTransform(124.3,83.2,0.455,0.455,0,0,0,0.1,0.1);
	this.instance_31._off = true;

	this.instance_32 = new lib.Interpoler43("synched",0);
	this.instance_32.parent = this;
	this.instance_32.setTransform(124.3,84.3,0.455,0.455,0,0,0,0.1,0);
	this.instance_32._off = true;

	this.instance_33 = new lib.Interpoler44("synched",0);
	this.instance_33.parent = this;
	this.instance_33.setTransform(124.3,84.3,0.455,0.455,0,0,0,0.1,0);
	this.instance_33._off = true;

	this.instance_34 = new lib.Interpoler45("synched",0);
	this.instance_34.parent = this;
	this.instance_34.setTransform(124.3,84.3,0.455,0.455,0,0,0,0.1,0);
	this.instance_34._off = true;

	this.instance_35 = new lib.Interpoler46("synched",0);
	this.instance_35.parent = this;
	this.instance_35.setTransform(121.1,84.3,0.455,0.455);
	this.instance_35._off = true;

	this.instance_36 = new lib.Interpoler47("synched",0);
	this.instance_36.parent = this;
	this.instance_36.setTransform(119.4,84.3,0.455,0.455);
	this.instance_36._off = true;

	this.instance_37 = new lib.Interpoler48("synched",0);
	this.instance_37.parent = this;
	this.instance_37.setTransform(119.4,84.3,0.455,0.455);
	this.instance_37._off = true;

	this.instance_38 = new lib.Interpoler49("synched",0);
	this.instance_38.parent = this;
	this.instance_38.setTransform(119.4,84.3,0.455,0.455);
	this.instance_38._off = true;

	this.instance_39 = new lib.Interpoler50("synched",0);
	this.instance_39.parent = this;
	this.instance_39.setTransform(119.4,84.3,0.455,0.455);
	this.instance_39._off = true;

	this.instance_40 = new lib.Interpoler51("synched",0);
	this.instance_40.parent = this;
	this.instance_40.setTransform(119.4,84.3,0.455,0.455);
	this.instance_40._off = true;

	this.instance_41 = new lib.Interpoler52("synched",0);
	this.instance_41.parent = this;
	this.instance_41.setTransform(119.4,84.3,0.455,0.455);
	this.instance_41._off = true;

	this.instance_42 = new lib.Interpoler54("synched",0);
	this.instance_42.parent = this;
	this.instance_42.setTransform(119.4,84.3,0.455,0.455);
	this.instance_42._off = true;

	this.instance_43 = new lib.Interpoler55("synched",0);
	this.instance_43.parent = this;
	this.instance_43.setTransform(119.4,84.3,0.455,0.455);
	this.instance_43._off = true;

	this.instance_44 = new lib.Interpoler56("synched",0);
	this.instance_44.parent = this;
	this.instance_44.setTransform(119.4,84.3,0.455,0.455);
	this.instance_44._off = true;

	this.instance_45 = new lib.Interpoler57("synched",0);
	this.instance_45.parent = this;
	this.instance_45.setTransform(119.4,84.3,0.455,0.455);
	this.instance_45._off = true;

	this.instance_46 = new lib.Interpoler58("synched",0);
	this.instance_46.parent = this;
	this.instance_46.setTransform(119.4,84.3,0.455,0.455);
	this.instance_46._off = true;

	this.instance_47 = new lib.Interpoler59("synched",0);
	this.instance_47.parent = this;
	this.instance_47.setTransform(119.4,84.3,0.455,0.455);
	this.instance_47._off = true;

	this.instance_48 = new lib.Interpoler60("synched",0);
	this.instance_48.parent = this;
	this.instance_48.setTransform(119.4,84.3,0.455,0.455);
	this.instance_48._off = true;

	this.instance_49 = new lib.Interpoler61("synched",0);
	this.instance_49.parent = this;
	this.instance_49.setTransform(119.4,84.3,0.455,0.455);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_12}]},9).to({state:[{t:this.instance_13}]},13).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).wait(23));
	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(9).to({_off:false},0).to({_off:true,y:78.6},13).wait(59));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(9).to({_off:false},13).to({_off:true},1).wait(58));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(22).to({_off:false},1).to({_off:true},1).wait(57));
	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(23).to({_off:false},1).to({_off:true},1).wait(56));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(24).to({_off:false},1).to({_off:true,regX:0,x:93.8},1).wait(55));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(25).to({_off:false},1).to({_off:true,x:104.6},1).wait(54));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(26).to({_off:false},1).to({_off:true,regX:0.1,x:109.1},1).wait(53));
	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(27).to({_off:false},1).to({_off:true,regX:0,x:118.8},1).wait(52));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(28).to({_off:false},1).to({_off:true,regX:0.1,x:124.3},1).wait(51));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(29).to({_off:false},1).to({_off:true},1).wait(50));
	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(30).to({_off:false},1).to({_off:true},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(31).to({_off:false},1).to({_off:true},1).wait(48));
	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(32).to({_off:false},1).to({_off:true},1).wait(47));
	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(33).to({_off:false},1).to({_off:true},1).wait(46));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(34).to({_off:false},1).to({_off:true},1).wait(45));
	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(35).to({_off:false},1).to({_off:true},1).wait(44));
	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(36).to({_off:false},1).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(37).to({_off:false},1).to({_off:true},1).wait(42));
	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(38).to({_off:false},1).to({_off:true,regY:0.1,y:83.2},1).wait(41));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(39).to({_off:false},1).to({_off:true,regY:0,y:84.3},1).wait(40));
	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(40).to({_off:false},1).to({_off:true},1).wait(39));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(41).to({_off:false},1).to({_off:true},1).wait(38));
	this.timeline.addTween(cjs.Tween.get(this.instance_34).wait(42).to({_off:false},1).to({_off:true,regX:0,x:121.1},1).wait(37));
	this.timeline.addTween(cjs.Tween.get(this.instance_35).wait(43).to({_off:false},1).to({_off:true,x:119.4},1).wait(36));
	this.timeline.addTween(cjs.Tween.get(this.instance_36).wait(44).to({_off:false},1).to({_off:true},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_37).wait(45).to({_off:false},1).to({_off:true},1).wait(34));
	this.timeline.addTween(cjs.Tween.get(this.instance_38).wait(46).to({_off:false},1).to({_off:true},1).wait(33));
	this.timeline.addTween(cjs.Tween.get(this.instance_39).wait(47).to({_off:false},1).to({_off:true},1).wait(32));
	this.timeline.addTween(cjs.Tween.get(this.instance_40).wait(48).to({_off:false},1).to({_off:true},1).wait(31));
	this.timeline.addTween(cjs.Tween.get(this.instance_41).wait(49).to({_off:false},1).to({_off:true},1).wait(30));
	this.timeline.addTween(cjs.Tween.get(this.instance_42).wait(50).to({_off:false},1).to({_off:true},1).wait(29));
	this.timeline.addTween(cjs.Tween.get(this.instance_43).wait(51).to({_off:false},1).to({_off:true},1).wait(28));
	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(52).to({_off:false},1).to({_off:true},1).wait(27));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(53).to({_off:false},1).to({_off:true},1).wait(26));
	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(54).to({_off:false},1).to({_off:true},1).wait(25));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(55).to({_off:false},1).to({_off:true},1).wait(24));
	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(56).to({_off:false},1).to({_off:true},1).wait(23));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
import { ObjectId } from 'bson';

export const availableAgentSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberView', 'memberRank'];
export const availableMemberSorts = ['createdAt', 'updatedAt', 'memberLikes', 'memberView'];

export const availableOptions = ['propertyBarter', 'propertyRent'];
export const availablePropertySorts = [
	'createdAt',
	'updatedAt',
	'propertyLikes',
	'propertyViews',
	'propertyRank',
	'propertyPrice',
];

export const availableBoardArticleSorts = ['createdAt', 'updatedAt', 'articleLikes', 'articleViews'];
/* IMAGE CONFIGURATION */
const { v4: uuidv4 } = require('uuid');
import * as path from 'path';

export const validMimeTypes = ['image/png', 'image/jpg', 'image/jpeg'];
export const getSerialForImage = (filename: string) => {
	const ext = path.parse(filename).ext;
	return uuidv4() + ext;
};

export const shapeIntoMongoObjectId = (target: any) => {
	return typeof target === 'string' ? new ObjectId(target) : target;
};

export const lookupMember = {
	$lookup: {
		//boshqa collection bilan bog‘lash
		from: 'members',
		localField: 'memberId',
		foreignField: '_id',
		as: 'memberData',
	},
};
/* POSTMAN
  imageUploader
  operations: { "query": "mutation ImageUploader($file: Upload!, $target: String!) { imageUploader(file: $file, target: $target) }", "variables": { "file": null, "target": "member" }}
  map: { "0": ["variables.file"] }
  0: File
 
  imagesUploader
  operations: { "query": "mutation ImagesUploader($files: [Upload!]!, $target: String!) { imagesUploader(files: $files, target: $target) }", "variables": { "files": [null, null, null, null], "target": "property" }}
  map: { "0": ["variables.files.0"], "1": ["variables.files.1"], "2": ["variables.files.2"], "3": ["variables.files.3"], "4": ["variables.files.4"] }
  0: File
  1: File
  2: File
  3: File
  4: File
 
  **/

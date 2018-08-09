import { Repository } from "typeorm";
import { ObjectID } from "mongodb";
import { GetAllFriendHandler } from '../../../src/areas/peppapig/queries/handlers/getAll-friend.handler';
import { Friend } from '../../../src/areas/peppapig/domain/entities/friend.entity';
import { GetAllFriendQuery } from "../../../src/areas/peppapig/queries/requests/getall-friend.request";

describe('GetAllFriendHandler', () => {
  let classUnderTest: GetAllFriendHandler;
  let friendRepository: Repository<Friend>;

  beforeEach(() => {
    friendRepository = new Repository<Friend>();
    classUnderTest = new GetAllFriendHandler(friendRepository);
  });

  describe('execute', () => {
    it('should call find() from repository', async () => {
      // Arrange
      let friend: Friend = {
          id: new ObjectID(1),
          name: "name"
      };
      const spy = jest.spyOn(friendRepository, 'find')
        .mockImplementation(() => Promise.resolve([friend]));

      // Act
      await classUnderTest.execute(new GetAllFriendQuery(), () => {})
        .then(() => {
            // Assert
            expect(spy).toHaveBeenCalledTimes(1);
        });  
    });

    it('should return the a list of friends', async () => {
        // Arrange
        var id = new ObjectID(1);
        let friend: Friend = {
            id: id,
            name: "name"
        };
        const spy = jest.spyOn(friendRepository, 'find')
          .mockImplementation(() => Promise.resolve([friend]));

        const fakeFunc = jest.fn();
  
        // Act
        await classUnderTest.execute(new GetAllFriendQuery(), fakeFunc.mockReturnValue([friend]))
          .then(() => {
              // Assert
              let results: Friend[] = fakeFunc();
              expect(results.length).toBe(1);
          });  
      });
  });

});